import { IModels } from '../interfaces/IModels';
import { IUser } from "../interfaces/IUser";
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserSchema } from '../schemas/userSchema';

class Models implements IModels{

    constructor(){
        console.log("Creating New Model");
    }

    public User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
}

export default new Models;