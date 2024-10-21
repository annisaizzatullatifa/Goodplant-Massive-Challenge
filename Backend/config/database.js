import { Sequelize } from "sequelize";

const db = new Sequelize('goodplant','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;