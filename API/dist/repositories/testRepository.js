"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseReposytory_1 = require("./baseReposytory");
const mongoose = require("mongoose");
const testShcema_1 = require("../schemas/testShcema");
class TestRepository extends baseReposytory_1.BaseRepository {
    constructor() {
        super(mongoose.model('Test', testShcema_1.default));
    }
}
exports.default = new TestRepository;
