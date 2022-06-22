const { Router } = require("express");
const database = require("../../db");
const orderProducts = require("../model/orderProducts");
const products = require("../model/products");
const orders = require("../model/orders");
const { getAllProducts } = require("../services/products");
const {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
} = require("../services/orders");
const { getProductsByOrderId } = require("../services/orderProducts");
const orderRoutes = new Router();

orderRoutes.get("/products", async (req, res) => {
  try {
    const showProducts = await getAllProducts();
    res.send(showProducts);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.get("/", async (req, res) => {
  try {
    const showOrders = await getAllOrders();
    res.send(showOrders);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.get("/:orderId/orderProducts", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const orderProcuts = await getProductsByOrderId(orderId);

    res.send(orderProcuts);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.get("/:orderId", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const order = await getOrderById(orderId);
    res.send(order);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    // string com nome
    const date = req.body.date;
    // string como data (mm-dd-aaaa);
    const products = req.body.products;
    // [{ id: number, qty: number }]
    const newOrder = await createOrder(name, date, products);
    res.send(newOrder);
  } catch (error) {
    res.end(error.message);
  }
});

orderRoutes.put("/:orderId", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const name = req.body.name;
    // string com nome
    const date = req.body.date;
    // string como data (mm-dd-aaaa);
    const products = req.body.products;
    // [{ id: number, qty: number }]
    const updatedOrder = await updateOrder(orderId, name, date, products);
    res.send(updatedOrder);
  } catch (error) {
    console.error(error);
    res.end(error.message);
  }
});

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

orderRoutes.delete("/:orderId/delete/:productId", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const productId = Number(req.params.productId);
    const deleteOrderProduct = await orderProducts.destroy({
      where: {
        product_id: productId,
        order_id: orderId,
      },
    });
    res.send(deleteOrderProduct);
  } catch (error) {
    res.end(error.message);
  }
});
module.exports = orderRoutes;
// UPDATE `shopper`.`order_products` SET `qty` = '3' WHERE (`id` = '2');
