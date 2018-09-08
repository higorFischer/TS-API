"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseReposytory_1 = require("../base/repository/baseReposytory");
const models_1 = require("../models/models");
class UserRepository extends baseReposytory_1.BaseRepository {
    constructor() { super(models_1.default.User); }
}
exports.default = new UserRepository;
