import { IUser } from "./IUser";
import { Model } from "mongoose";

export interface IModels {

	User: Model<IUser>;

}