import * as httpStatus from 'http-status';
import { Request, Response }  from "express"

import UserRepository from '../repositories/userRepository';
import { BaseController } from '../abstract/controller/baseController';
import { IUser } from '../interfaces/IUser';
import * as jwt  from "jsonwebtoken";
import configs from '../config/configs';

const sendReponse = function (res, statusCode, data) {
	res.status(statusCode).json({ 'result': data })
}

class UserController extends BaseController<IUser> {
	
	constructor() { super(UserRepository); }
	
	public validateUser(req: Request, res: Response){ 
		UserRepository
			.getValidUser(req.body)
			.then(user => sendReponse(res, httpStatus.OK, this.jwtSign({email: user.email})))
			.catch(err => sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
	}

	public create(req: Request, res: Response){
		this.CheckValidUser(req.body)
			.then(exists => {
				if(exists)
					sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, "This email is already been used")
				else
					this.createValidUser(req, res);
			})
			.catch();
	}

	private createValidUser(req: Request, res: Response){
		UserRepository
			.create(req.body)
			.then(menus => sendReponse(res, httpStatus.CREATED, menus))
			.catch(err => sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, err))
	}

	private CheckValidUser(body: IUser): Promise<boolean>{
		return new Promise( (resolve) => {
			UserRepository
				.checkIfEmailExists(body)
				.then(exists => {
					if(exists)
						resolve(true);
					else
						resolve(false);
				});
		});
	}

	private jwtSign(data){ return jwt.sign(data, configs.secret, { expiresIn: 86400 }); }

}

export default new UserController();
