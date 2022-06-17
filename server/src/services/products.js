const products = require("../model/products");

const getAllProducts = async () => {
  const showProducts = await products.findAll();
  return showProducts;
};

module.exports = {
  getAllProducts,
};
