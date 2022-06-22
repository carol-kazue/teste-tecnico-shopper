const database = require("../../db");
const orderProducts = require("../model/orderProducts");

const mapRequestToTable = (id, products) => {
  return products.map((product) => {
    return {
      product_id: product.id,
      order_id: id,
      qty: product.qty,
    };
  });
};

const getProductsByOrderId = async (orderId) => {
  const showProductsOrder = await database.query(
    `
      SELECT 
          products.id, 
          products.name,  
          products.price,  
          order_products.qty  
      FROM orders
      JOIN order_products  
      ON order_products.order_id =  orders.id AND orders.id = ${orderId}
      JOIN products
      ON order_products.product_id = products.id;
      `,
    { type: database.QueryTypes.SELECT }
  );
  return showProductsOrder;
};

const addProductsToOrder = async (productsNewOrder, orderId) => {
  await orderProducts.bulkCreate(productsNewOrder);
  const showProductsOrder = await getProductsByOrderId(orderId);
  return showProductsOrder;
};

const editOrder = async (orderId, products) => {
  const getProductsByOrder = await getProductsByOrderId(orderId);
  const productsDeleted = getProductsByOrder.filter((product) => {
    return !products.some((newProduct) => {
      return newProduct.id === product.id;
    });
  });
  const newProducts = getProductsByOrder.filter((product) => {
    return products.some((newProduct) => {
      return newProduct.id === product.id;
    });
  });

  if (productsDeleted.length) {
    const deleted = mapRequestToTable(orderId, productsDeleted);
    await orderProducts.destroy(deleted, {
      where: deleted.map(({ id }) => id),
    });
  }
  const productsToUpdate = mapRequestToTable(orderId, newProducts);
  // await orderProducts.bulkCreate(productsToUpdate, {
  //   updateOnDuplicate: ["id", "product_id", "order_id"],
  // });
  console.log({ productsToUpdate });
  const updateProducts = await getProductsByOrderId(orderId);
  console.log(updateProducts);
  return updateProducts;
};

module.exports = {
  getProductsByOrderId,
  addProductsToOrder,
  mapRequestToTable,
  editOrder,
};
