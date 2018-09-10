import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import DataBase from './config/db';
import * as cors from "cors";
import uploads from "./config/uploads";
import Auth from "./config/auth";

//Route
import UserController from './controllers/userController';
import { IBaseController } from "./interfaces/IBaseController";
import { IUser } from "./interfaces/IUser";

class App {

	public app: express.Application;
	private morgan: morgan.Morgan;
	private bodyParser;
	private database: DataBase;

	constructor() {
		this.app = express();
		this.enableCors();
		this.middleware();
		this.database = new DataBase();
		this.dataBaseConnection();
		this.routes();
	}

	public enableCors() {
		const options: cors.CorsOptions = {
			allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
			credentials: true,
			methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
			origin: '*',
			preflightContinue: false
		};

		this.app.use(cors(options));
	}

	public dataBaseConnection() { this.database.createConnection(); }

	public closedataBaseConnection(message, callback) { this.database.closeConnection(message, () => callback());}

	public middleware() {
		this.app.use(morgan("dev"));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}

	public routes() {
		this.createAuthRoute();
		this.app.use(Auth.validate);
		this.addCustomRoutes();
	}
	
	private addCustomRoutes(){
		this.addRoutes<IUser>(UserController, "users");
	}

	private createAuthRoute(){
		this.app.route("/api/v1/login").post(UserController.validateUser.bind(UserController));
		this.app.route("/api/v1/register").post(UserController.create.bind(UserController));
	}

	private addRoutes<T>(Controller: IBaseController<any>, url: string){
		this.app.route(`/api/v1/${url}`).get(Controller.get.bind(Controller), );
		this.app.route(`/api/v1/${url}/:id`).get(Controller.getByID.bind(Controller));
		this.app.route(`/api/v1/${url}`).post(Controller.create.bind(Controller));
		this.app.route(`/api/v1/${url}/:id`).put(Controller.update.bind(Controller));
		this.app.route(`/api/v1/${url}/:id`).delete(Controller.delete.bind(Controller));
	}

}

export default new App();
