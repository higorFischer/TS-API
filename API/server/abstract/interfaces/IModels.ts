import { IUser } from "../../interfaces/IUser";
import { Model } from "mongoose";

export interface IModels {

	User: Model<IUser>;

}