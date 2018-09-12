import { Document } from "mongoose";

export interface IBaseModel extends Document{
    name: string;
}