import { Model, Document, DocumentQuery } from "mongoose";

export interface IBaseRepository<T extends Document> {

	model: Model<T>;
	getAll(): DocumentQuery<Array<T>, T>;
	getById(_id: any): DocumentQuery<T, T>;
	create(user: T): Promise<T>;
	delete(_id: any): DocumentQuery<T, T>;
	update(_id: any, user: T);
	
}