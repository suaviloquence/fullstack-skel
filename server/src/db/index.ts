import { Sequelize } from "sequelize";

import initHello from "./hello";

const sequelize = new Sequelize("sqlite:../database.sqlite3");

const opts = { sequelize };

const Hello = initHello(opts);

export { Hello };

export default sequelize;
