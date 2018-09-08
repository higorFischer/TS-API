import * as httpStatus from 'http-status';
import { Request, Response}  from "express"
import { IBaseController } from '../../interfaces/IBaseController';
import { IBaseRepository } from '../../interfaces/IBaseRepository';
import { Document } from 'mongoose';

const sendReponse = function (res, statusCode, data) {
	res.status(statusCode).json({ 'result': data })
}

export class BaseController<T extends Document> implements IBaseController<T>{
	
	public Repository: IBaseRepository<T>

	constructor(repository: IBaseRepository<T>){
		this.Repository = repository;
	}

	public get(req: Request, res: Response) {
		this.Repository
			.getAll()
			.then(user => sendReponse(res, httpStatus.OK, user))
			.catch(err => console.error.bind(console, `Error ${err}`))
	}

	public getByID(req: Request, res: Response) {
		const _id = { id: req.params.id };

		if (!_id)
			sendReponse(res, httpStatus.OK, 'Not found!');
		else
			this.Repository
				.getById(req.params.id)
				.then(programs => sendReponse(res, httpStatus.OK, programs))
				.catch(err => console.error.bind(console, `Error ${err}`));
	}

	public create(req: Request, res: Response) {
		this.Repository
			.create(req.body)
			.then(menus => sendReponse(res, httpStatus.CREATED, menus))
			.catch(err => console.error.bind(console, `Error ${err}`))
	}

	public update(req: Request, res: Response) {
		const _id = { id: req.params.id };

		if (req.body.length == 0) 
			return sendReponse(res, httpStatus.NOT_FOUND, 'Not found!');

		this.Repository
			.update(_id, req.body)
			.then(user => sendReponse(res, httpStatus.OK, user))
			.catch(err => console.error.bind(console, `Error ${err}`));

	}

	public delete(req: Request, res: Response) {

		if (!req.params.id)
			return sendReponse(res, httpStatus.NOT_FOUND, 'Not found!');

		this.Repository
			.delete(req.params.id)
			.then(user => sendReponse(res, httpStatus.OK, `Deleted with success!`))
			.catch(err => console.error.bind(console, `Error ${err}`));
	}
}
