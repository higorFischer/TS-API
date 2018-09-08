import UserRepository from '../repositories/userRepository';
import { BaseController } from '../base/controller/baseController';
import { IUser } from '../base/interfaces/IUser';

class UserController extends BaseController<IUser> {
	
	constructor() {
		super(UserRepository); 
	}
	
}

export default new UserController();
