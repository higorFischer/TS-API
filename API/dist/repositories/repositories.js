"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("./userRepository");
class Repositories {
    constructor() {
        this.UserRepository = userRepository_1.default;
    }
}
exports.Repositories = Repositories;
