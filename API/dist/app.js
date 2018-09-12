"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApp_1 = require("./abstract/baseApp");
//Controllers
const userController_1 = require("./controllers/userController");
class App extends baseApp_1.BaseApp {
    constructor() {
        super();
        this.NoAuthorizationNeededRoutes();
        this.AuthorizationNeededRoutes();
    }
    NoAuthorizationNeededRoutes() {
        this.app.route("/api/v1/login").post(userController_1.default.validateUser.bind(userController_1.default));
        this.app.route("/api/v1/register").post(userController_1.default.create.bind(userController_1.default));
    }
    AuthorizationNeededRoutes() {
        this.useValidationOnRoutes();
        this.addRoutes(userController_1.default, "user");
    }
}
exports.default = new App();
