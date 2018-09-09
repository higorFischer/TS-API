import { Document } from 'mongoose';

export interface IUser extends Document{
	name: string;
	birth: Date;
	email: string;
	password: string;
	date_of_creation: Date;
}