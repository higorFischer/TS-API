"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApp_1 = require("./abstract/baseApp");
class App extends baseApp_1.BaseApp {
    // public app: express.Application;
    // private morgan: morgan.Morgan;
    // private bodyParser;
    // private database: DataBase;
    constructor() {
        super();
        // this.app = express();
        // this.enableCors();
        // this.middleware();
        // this.database = new DataBase();
        // this.dataBaseConnection();
        // this.routes();
    }
}
exports.default = new App();
