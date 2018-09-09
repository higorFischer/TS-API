import UserRepository from '../repositories/userRepository';
import { BaseController } from '../abstract/controller/baseController';
import { IUser } from '../interfaces/IUser';

class UserController extends BaseController<IUser> {
	
	constructor() { super(UserRepository); }
	
}

export default new UserController();
