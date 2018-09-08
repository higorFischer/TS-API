"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../repositories/userRepository");
const baseController_1 = require("../base/controller/baseController");
class UserController extends baseController_1.BaseController {
    constructor() {
        super(userRepository_1.default);
    }
}
exports.default = new UserController();
