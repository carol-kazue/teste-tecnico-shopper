const Sequelize = require("sequelize");
const database = require("../../db");
const products = require("./products");
const orders = require("./orders");

const orderProducts = database.define(
  "order_products",
  {
    product_id: {
      type: Sequelize.INTEGER,
      foreingKey: true,
      key: "id",
    },
    order_id: {
      type: Sequelize.INTEGER,
      foreingKey: true,
      key: "id",
    },
    qty: Sequelize.INTEGER,
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

products.belongsToMany(orders, {
  through: {
    model: orderProducts,
  },
  // foreignKey: "product_id",
  constraint: true,
});
// products.hasMany(orderProducts, { foreignKey: "product_id" });

orderProducts.belongsTo(orders, {
  foreingKey: "orders_id",
  allowNull: false,
});
orderProducts.belongsTo(products, {
  foreingKey: "product_id",
  allowNull: false,
});

orders.belongsToMany(products, {
  through: {
    model: orderProducts,
  },
  // foreignKey: "order_id",
  constraint: true,
});
// orders.hasMany(orderProducts, { foreignKey: "order_id" });
module.exports = orderProducts;
