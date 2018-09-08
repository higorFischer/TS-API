"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) { this.model = model; }
    getAll() { return this.model.find({}); }
    getById(_id) { return this.model.findById(_id); }
    create(user) { return this.model.create(user); }
    delete(_id) { return this.model.findByIdAndRemove(_id); }
    update(_id, user) {
        const updateUser = Object.assign({}, user);
        return this.model.findByIdAndUpdate(_id, updateUser, { new: true });
    }
}
exports.BaseRepository = BaseRepository;
