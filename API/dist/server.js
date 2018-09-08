"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let port = process.env.PORT || '8000';
app_1.default.app.listen(port, function () {
    console.log(`server running in Port ${port}`);
});
process.once('SIGUSR2', () => app_1.default.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.once('SIGINT', () => app_1.default.closedataBaseConnection('connection crashed', () => process.exit(0)));
