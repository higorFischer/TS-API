import { BaseRepository } from '../abstract/repository/baseReposytory';
import Models from '../config/models';
import jwt = require("jwt-simple");

import { IUser } from '../interfaces/IUser';
import { DocumentQuery } from 'mongoose';
import configs from '../config/configs';

class UserRepository extends BaseRepository<IUser>{

	constructor() { super(Models.User); }
	
	public getValidUser(body: IUser): DocumentQuery<IUser, IUser> {
		return this.model.findOne({email: body.email, password: jwt.encode(body.password, configs.secret)}); 
	}

	public checkIfEmailExists(body: IUser){
		return this.model.findOne({email: body.email}); 
	}

	public create(body: IUser){
		body.password = jwt.encode(body.password, configs.secret);
		return this.model.create(body);
	}

}

export default new UserRepository;
