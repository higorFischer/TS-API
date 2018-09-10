"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema_1 = require("../schemas/userSchema");
class Models {
    constructor() {
        this.User = mongoose.model("User", userSchema_1.UserSchema);
    }
}
exports.default = new Models;
