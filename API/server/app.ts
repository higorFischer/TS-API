import { BaseApp } from "./abstract/baseApp";

//Controllers
import UserController from './controllers/userController';

class App extends BaseApp{

	constructor() {
		super();
		this.NoAuthorizationNeededRoutes();
		this.AuthorizationNeededRoutes();
	}

	private NoAuthorizationNeededRoutes(){
		this.app.route("/api/v1/login").post(UserController.validateUser.bind(UserController));
		this.app.route("/api/v1/register").post(UserController.create.bind(UserController));
	}

	private AuthorizationNeededRoutes(): void {
		this.useValidationOnRoutes();
		this.addRoutes(UserController, "user");
	}

}

export default new App();
