"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 200
    },
    birth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    createdAt: Date
});
exports.UserSchema.pre("save", function (next) {
    if (!this.createdAt)
        this.createdAt = new Date();
    next();
});
