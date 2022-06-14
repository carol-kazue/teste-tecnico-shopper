import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
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

  const postOrder = (orderId, productId) => {
    axios
      .post(`http://localhost:3300/orders/${orderId}/addProduct/${productId}`)
      .then((res) => {
        setOrderProducts([...orderProducts, res.data]);
        console.log(res.data);
      });
  };

  const data = {
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
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
