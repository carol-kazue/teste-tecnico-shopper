const Sequelize = require("sequelize");
const database = require("../../db");

const products = database.define(
  "products",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: Sequelize.STRING(255),
    price: Sequelize.DECIMAL(10, 2),
    qty_stock: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = products;
