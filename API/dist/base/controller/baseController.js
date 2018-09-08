"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status");
const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
class BaseController {
    constructor(repository) {
        this.Repository = repository;
    }
    get(req, res) {
        this.Repository
            .getAll()
            .then(user => sendReponse(res, httpStatus.OK, user))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    getByID(req, res) {
        const _id = { id: req.params.id };
        if (!_id)
            sendReponse(res, httpStatus.OK, 'Not found!');
        else
            this.Repository
                .getById(req.params.id)
                .then(programs => sendReponse(res, httpStatus.OK, programs))
                .catch(err => console.error.bind(console, `Error ${err}`));
    }
    create(req, res) {
        this.Repository
            .create(req.body)
            .then(menus => sendReponse(res, httpStatus.CREATED, menus))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    update(req, res) {
        const _id = { id: req.params.id };
        if (req.body.length == 0)
            return sendReponse(res, httpStatus.NOT_FOUND, 'Not found!');
        this.Repository
            .update(_id, req.body)
            .then(user => sendReponse(res, httpStatus.OK, user))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    delete(req, res) {
        if (!req.params.id)
            return sendReponse(res, httpStatus.NOT_FOUND, 'Not found!');
        this.Repository
            .delete(req.params.id)
            .then(user => sendReponse(res, httpStatus.OK, `Deleted with success!`))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
}
exports.BaseController = BaseController;
