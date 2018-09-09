import { IBaseRepository } from '../../interfaces/IBaseRepository';
import { Model, Document, DocumentQuery } from 'mongoose';
import Models from '../../models/models';

export class BaseRepository<T extends Document> implements IBaseRepository<T> {
	
	public model: Model<T>;

	constructor(model: Model<T>) { 
		console.log("Created New Repository...")
		this.model = model; 
	}

	public getAll(): DocumentQuery<Array<T>, T> { return this.model.find({}); }

	public getById(_id: any): DocumentQuery<T, T> { return this.model.findById(_id); }

	public create(user: T): Promise<T> { return this.model.create(user); }
	
	public delete(_id: any): DocumentQuery<T, T> { return this.model.findByIdAndRemove(_id); }
	
	public update(_id: any, user: T) {
		const updateUser = (<any>Object).assign({}, user);
		return this.model.findByIdAndUpdate(_id, updateUser, { new: true });
	}
	
}