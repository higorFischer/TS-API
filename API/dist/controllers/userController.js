"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status");
const userRepository_1 = require("../repositories/userRepository");
const baseController_1 = require("../abstract/controller/baseController");
const jwt = require("jsonwebtoken");
const configs_1 = require("../config/configs");
const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
class UserController extends baseController_1.BaseController {
    constructor() { super(userRepository_1.default); }
    validateUser(req, res) {
        userRepository_1.default
            .getValidUser(req.body)
            .then(user => sendReponse(res, httpStatus.OK, this.jwtSign({ email: user.email })))
            .catch(err => sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, err));
    }
    create(req, res) {
        this.CheckValidUser(req.body)
            .then(exists => {
            if (exists)
                sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, "This email is already been used");
            else
                this.createValidUser(req, res);
        })
            .catch();
    }
    createValidUser(req, res) {
        userRepository_1.default
            .create(req.body)
            .then(menus => sendReponse(res, httpStatus.CREATED, menus))
            .catch(err => sendReponse(res, httpStatus.INTERNAL_SERVER_ERROR, err));
    }
    CheckValidUser(body) {
        return new Promise((resolve) => {
            userRepository_1.default
                .checkIfEmailExists(body)
                .then(exists => {
                if (exists)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    }
    jwtSign(data) { return jwt.sign(data, configs_1.default.secret, { expiresIn: 86400 }); }
}
exports.default = new UserController();
