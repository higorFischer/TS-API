"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const userSchema_1 = require("../schemas/userSchema");
class Models {
    constructor() {
        this.User = Mongoose.model("User", userSchema_1.default);
    }
}
exports.default = new Models;
