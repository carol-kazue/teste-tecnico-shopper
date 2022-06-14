const { DATE } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../../db");

const orders = database.define(
  "orders",
  {
    name: Sequelize.STRING(50),
    date: Sequelize.DATE,
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = orders;
