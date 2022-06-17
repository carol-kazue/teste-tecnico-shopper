import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  GlobalStateContext,
  ModalShopStateContext,
} from "./GlobalStateContext";

const ModalShopState = (props) => {
  const { setProducts, products, getProducts } = useContext(GlobalStateContext);
  const [qty, setQty] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setProduct(null);
    setQty(0);
  };

  const handleQtyChange = (ev) => setQty(ev.target.value);

  useEffect(() => {
    getProducts();
  }, []);

  const defaultProps = {
    options: products,
    getOptionLabel: (option) => option.name,
  };

  return (
    <ModalShopStateContext.Provider
      value={{
        setProducts,
        products,
        getProducts,
        qty,
        setQty,
        open,
        setOpen,
        product,
        setProduct,
        handleOpen,
        handleClose,
        handleQtyChange,
        defaultProps,
      }}
    >
      {props.children}
    </ModalShopStateContext.Provider>
  );
};
export default ModalShopState;
