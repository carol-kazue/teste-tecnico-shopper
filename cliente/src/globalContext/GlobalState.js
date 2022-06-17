import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [order, setOrder] = useState({
    id: null,
    name: "",
    date: "",
    products: [],
  });

  const getProducts = () => {
    axios.get(`http://localhost:3300/orders/products`).then((res) => {
      setProducts(res.data);
      console.log(res.data);
      // navigate("/home");
    });
  };

  const getOrders = () => {
    axios.get(`http://localhost:3300/orders`).then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };

  const getOrderProducts = (id) => {
    axios
      .get(`http://localhost:3300/orders/${id}/orderProducts`)
      .then((res) => {
        setOrderProducts(res.data);
        console.log(res.data);
      });
  };
  const getOrderById = (id) => {
    axios.get(`http://localhost:3300/orders/${id}`).then((res) => {
      setOrder(res.data);
    });
  };

  const postOrder = (order) => {
    axios.post(`http://localhost:3300/orders`, order).then((res) => {
      setOrderProducts([...orderProducts, res.data]);
      console.log(res.data);
    });
  };
  const patchOrder = (qty, orderId, productId) => {
    const body = {
      qty: qty,
    };
    axios
      .patch(`http://localhost:3300/orders/${orderId}/edit/${productId}`, body)
      .then((res) => {
        const newOrderProducts = orderProducts.map((product) => {
          if (productId === product.id) {
            return res.data;
          }
          return product;
        });
        setOrderProducts(newOrderProducts);
      });
  };
  const updateOrder = (orderId, order) => {
    // console.log(order, orderId);
    axios.put(`http://localhost:3300/orders/${orderId}`, order).then((res) => {
      console.log(res.data);
      // setOrder(res.data);
    });
  };
  return (
    <GlobalStateContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        orders,
        setOrders,
        getOrders,
        orderProducts,
        setOrderProducts,
        getOrderProducts,
        postOrder,
        patchOrder,
        order,
        getOrderById,
        setOrder,
        updateOrder,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
