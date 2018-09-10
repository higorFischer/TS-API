import { BaseRepository } from '../abstract/repository/baseReposytory';
import Models from '../models/models';
import jwt = require("jwt-simple");

import { IUser } from '../interfaces/IUser';
import { DocumentQuery } from 'mongoose';
import configs from '../config/configs';

class UserRepository extends BaseRepository<IUser>{

	constructor() { super(Models.User); }
	
	public getValidUser(body: IUser): DocumentQuery<IUser, IUser> {
		return this.model.findOne({email: body.email, password: jwt.encode(body.password, configs.secret)}); 
	}


}

export default new UserRepository;
