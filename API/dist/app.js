"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db_1 = require("./config/db");
const cors = require("cors");
const auth_1 = require("./config/auth");
//Route
const userController_1 = require("./controllers/userController");
class App {
    constructor() {
        this.app = express();
        this.enableCors();
        this.middleware();
        this.database = new db_1.default();
        this.dataBaseConnection();
        this.routes();
    }
    enableCors() {
        const options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
        };
        this.app.use(cors(options));
    }
    dataBaseConnection() { this.database.createConnection(); }
    closedataBaseConnection(message, callback) { this.database.closeConnection(message, () => callback()); }
    middleware() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.createAuthRoute();
        this.app.use(auth_1.default.validate);
        this.addCustomRoutes();
    }
    addCustomRoutes() {
        this.addRoutes(userController_1.default, "users");
    }
    createAuthRoute() {
        this.app.route("/api/v1/login").post(userController_1.default.validateUser.bind(userController_1.default));
        this.app.route("/api/v1/register").post(userController_1.default.create.bind(userController_1.default));
    }
    addRoutes(Controller, url) {
        this.app.route(`/api/v1/${url}`).get(Controller.get.bind(Controller));
        this.app.route(`/api/v1/${url}/:id`).get(Controller.getByID.bind(Controller));
        this.app.route(`/api/v1/${url}`).post(Controller.create.bind(Controller));
        this.app.route(`/api/v1/${url}/:id`).put(Controller.update.bind(Controller));
        this.app.route(`/api/v1/${url}/:id`).delete(Controller.delete.bind(Controller));
    }
}
exports.default = new App();
