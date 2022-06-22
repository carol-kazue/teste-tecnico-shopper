const {
  addProductsToOrder,
  getProductsByOrderId,
  mapRequestToTable,
  editOrder,
} = require("./orderProducts");
const orders = require("../model/orders");

const getAllOrders = async () => {
  const showOrders = await orders.findAll();
  return showOrders;
};

const createOrder = async (name, date, products) => {
  const newOrder = await orders.create({
    name: name,
    date: date,
  });
  // { id: number, name: string, date: string }

  // { product_id: number, order_id: number, qty: number}

  // [{ id: number, qty: number }] -> [{ product_id: number, order_id: number, qty: number}]
  const productsNewOrder = mapRequestToTable(orderId, products);
  const newOrderProducts = await addProductsToOrder(
    productsNewOrder,
    newOrder.id
  );
  return { ...newOrder.dataValues, products: newOrderProducts };
};

const updateOrder = async (id, name, date, products) => {
  const update = await orders.update(
    {
      id: id,
      name: name,
      date: date,
    },
    { where: { id: id } }
  );
  const newProducts = await editOrder(id, products);
  return { ...update.dataValues, products: newProducts };
};

const getOrderById = async (id) => {
  const showOrderById = await orders.findByPk(id);
  const getProducts = await getProductsByOrderId(id);
  return { ...showOrderById.dataValues, products: getProducts };
};
module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
};
