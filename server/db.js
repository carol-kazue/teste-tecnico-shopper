const Sequelize = require("sequelize");
const sequelize = new Sequelize("shopper", "root", "Jac10felia!", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;
