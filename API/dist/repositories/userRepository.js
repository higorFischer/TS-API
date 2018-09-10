"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseReposytory_1 = require("../abstract/repository/baseReposytory");
const models_1 = require("../models/models");
const jwt = require("jwt-simple");
const configs_1 = require("../config/configs");
class UserRepository extends baseReposytory_1.BaseRepository {
    constructor() { super(models_1.default.User); }
    create(user) {
        this.getValidUser(user).then((data) => {
            console.log("ACHOU", data);
        });
        return models_1.default.User.create({
            name: user.name,
            email: user.email,
            birth: user.birth,
            password: jwt.encode(user.password, configs_1.default.secret)
        });
    }
    getValidUser(body) {
        return this.model.findOne({ email: body.email, password: jwt.encode(body.password, configs_1.default.secret) });
    }
}
exports.default = new UserRepository;
