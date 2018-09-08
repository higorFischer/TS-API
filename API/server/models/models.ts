import * as Mongoose from "mongoose";
import UserSchema from "../schemas/userSchema";
import { IModels } from '../interfaces/IModels';
import { IUser } from "../interfaces/IUser";

class Models implements IModels{
    public User = Mongoose.model<IUser>("User", UserSchema);
}

export default new Models;