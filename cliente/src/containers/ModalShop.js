import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Modal from "../components/Modal";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import {
  GlobalStateContext,
  ModalShopStateContext,
} from "../globalContext/GlobalStateContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const ModalShop = ({ onProductChange }) => {
  const {
    qty,
    setQty,
    open,
    product,
    setProduct,
    handleOpen,
    handleClose,
    handleQtyChange,
    defaultProps,
  } = useContext(ModalShopStateContext);
  const handleAddProduct = () => {
    if (product.qty_stock < qty) {
      // implementar alerta
    } else {
      const newProduct = { ...product, qty };
      delete newProduct.qty_stock;
      onProductChange(newProduct);
    }

    setProduct(null);
    setQty(0);
    handleClose();
  };
  return (
    <>
      <Button onClick={handleOpen}>Adicionar produto </Button>
      <Modal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title="Adicionar Produto"
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="stretch"
              margin={2}
            >
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                blurOnSelect
                onChange={(ev, newValue) => {
                  setProduct(newValue);
                }}
                value={product}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="pesquisar-produto"
                    label="Pesquisar Produto"
                    variant="standard"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="outlined">Verificar Estoque</Button>
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              margin={2}
            >
              {/* <Button color="primary">
                <AddCircleOutlineIcon />
              </Button> */}
              <TextField
                id="quantidade-produto"
                label="Quantidade"
                value={qty}
                variant="standard"
                onChange={handleQtyChange}
              />
              {/* <Button color="primary">
                <RemoveCircleOutlineIcon />
              </Button> */}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-end"
              margin={2}
            >
              <Button variant="contained" onClick={handleAddProduct}>
                Adicionar Produto
              </Button>
              <Button onClick={handleClose} variant="contained">
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ModalShop;
