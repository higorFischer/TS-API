"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseReposytory_1 = require("../abstract/repository/baseReposytory");
const models_1 = require("../config/models");
const jwt = require("jwt-simple");
const configs_1 = require("../config/configs");
class UserRepository extends baseReposytory_1.BaseRepository {
    constructor() { super(models_1.default.User); }
    getValidUser(body) {
        return this.model.findOne({ email: body.email, password: jwt.encode(body.password, configs_1.default.secret) });
    }
    checkIfEmailExists(body) {
        return this.model.findOne({ email: body.email });
    }
    create(body) {
        body.password = jwt.encode(body.password, configs_1.default.secret);
        return this.model.create(body);
    }
}
exports.default = new UserRepository;
