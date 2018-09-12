import { IBaseModel } from '../abstract/interfaces/IBaseModel';

export interface IUser extends IBaseModel{
	name: string;
	birth: Date;
	email: string;
	password: string;
}