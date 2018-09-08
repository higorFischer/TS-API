import * as Mongoose from "mongoose";
import UserSchema from "../schemas/userSchema";
import { IModels } from '../base/interfaces/IModels';
import { IUser } from "../base/interfaces/IUser";

class Models implements IModels{
    public User = Mongoose.model<IUser>("User", UserSchema);
}

export default new Models;