"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseSchema_1 = require("../abstract/schema/baseSchema");
exports.UserSchema = baseSchema_1.extendSchema(baseSchema_1.BaseSchema, {
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
        minlength: 8,
    }
});
