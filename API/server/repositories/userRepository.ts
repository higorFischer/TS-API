import { BaseRepository } from '../base/repository/baseReposytory';
import Models from '../models/models';
import { IUser } from '../base/interfaces/IUser';

class UserRepository extends BaseRepository<IUser>{

	constructor() { super(Models.User); }

}

export default new UserRepository;
