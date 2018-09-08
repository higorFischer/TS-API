import { BaseRepository } from '../abstract/repository/baseReposytory';
import Models from '../models/models';
import { IUser } from '../abstract/interfaces/IUser';

class UserRepository extends BaseRepository<IUser>{

	constructor() { super(Models.User); }

}

export default new UserRepository;
