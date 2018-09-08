"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TestSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: String }
});
exports.default = TestSchema;
