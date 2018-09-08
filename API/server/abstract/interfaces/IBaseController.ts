import { Request, Response } from "express";
import { IBaseRepository } from "./IBaseRepository";
import { Document } from "mongoose";

export interface IBaseController<T extends Document> {

	Repository: IBaseRepository<T>
	get(req: Request, res: Response): void;
	getByID(req: Request, res: Response): void;
	create(req: Request, res: Response): void;
	update(req: Request, res: Response): void;
	delete(req: Request, res: Response): void;
}