import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import DataBase from '../config/db';
import * as cors from "cors";
import uploads from "../config/uploads";
import Auth from "../config/auth";

import UserController from '../controllers/userController';
import { IBaseController } from "../abstract/interfaces/IBaseController";
import { IUser } from "../interfaces/IUser";


export class BaseApp{

	public app: express.Application;
	protected morgan: morgan.Morgan;
	protected bodyParser;
	protected database: DataBase;

	constructor(){
		this.app = express();
		this.enableCors();
		this.middleware();
		this.database = new DataBase();
		this.dataBaseConnection();
	}

	protected enableCors() {
		const options: cors.CorsOptions = {
			allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
			credentials: true,
			methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
			origin: '*',
			preflightContinue: false
		};

		this.app.use(cors(options));
	}

	protected useValidationOnRoutes(){ this.app.use(Auth.validate); }

	public dataBaseConnection() { this.database.createConnection(); }

	public closedataBaseConnection(message, callback) { this.database.closeConnection(message, () => callback());}

	protected middleware() {
		this.app.use(morgan("dev"));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
	
	protected addRoutes<T>(Controller: IBaseController<any>, url: string){
		this.app.route(`/api/v1/${url}`).get(Controller.get.bind(Controller), );
		this.app.route(`/api/v1/${url}/:id`).get(Controller.getByID.bind(Controller));
		this.app.route(`/api/v1/${url}`).post(Controller.create.bind(Controller));
		this.app.route(`/api/v1/${url}/:id`).put(Controller.update.bind(Controller));
		this.app.route(`/api/v1/${url}/:id`).delete(Controller.delete.bind(Controller));
	}

}