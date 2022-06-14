const { Router } = require("express");
const database = require("../../db");
const orderProducts = require("../model/orderProducts");
const products = require("../model/products");
const orders = require("../model/orders");

const orderRoutes = new Router();

orderRoutes.post("/:orderId/addProduct/:productId", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const productID = Number(req.params.productId);
    const qty = req.body.qty;

    const newOrderProducts = await orderProducts.create({
      product_id: productID,
      order_id: orderId,
      qty: qty,
    });
    res.send(newOrderProducts);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.get("/orderProducts", async (req, res) => {
  try {
    const showOrderProducts = await orderProducts.findAll();
    res.send(showOrderProducts);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.get("/:orderId/orderProducts", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const orderProcuts = await database.query(
      `
    SELECT 
        products.id as product_id, 
        products.name as product_name, 
        order_products.qty as qty 
    FROM orders
    JOIN order_products  
    ON order_products.order_id =  orders.id AND orders.id = ${orderId}
    JOIN products
    ON order_products.product_id = products.id;
    `,
      { type: database.QueryTypes.SELECT }
    );

    res.send(orderProcuts);
  } catch (error) {
    res.end(error.message);
  }
});
orderRoutes.patch("/:orderId/edit/:productId", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const productId = Number(req.params.productId);
    const newQty = req.body.qty;
    const editOrderProduct = await orderProducts.update(
      { qty: newQty },
      {
        where: {
          product_id: productId,
          order_id: orderId,
        },
      }
    );
    const orderProcut = await database.query(
      `
      SELECT 
        products.id as product_id, 
        products.name as product_name, 
        order_products.qty as qty 
      FROM order_products
      JOIN products
      ON order_products.product_id = products.id
      AND products.id =  ${productId}
      JOIN  orders 
      ON order_products.order_id = orders.id
      AND orders.id =  ${orderId};
      `,
      { type: database.QueryTypes.SELECT }
    );
    res.send(orderProcut);
  } catch (error) {
    res.end(error.message);
  }
});

module.exports = orderRoutes;
// UPDATE `shopper`.`order_products` SET `qty` = '3' WHERE (`id` = '2');
