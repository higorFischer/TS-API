import * as Mongoose from "mongoose";
import UserSchema from "../schemas/userSchema";
import { IModels } from '../abstract/interfaces/IModels';
import { IUser } from "../abstract/interfaces/IUser";

class Models implements IModels{
    public User = Mongoose.model<IUser>("User", UserSchema);
}

export default new Models;