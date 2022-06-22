import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableListOrders from "../containers/TableListProducts";
import ModalShop from "../containers/ModalShop";
import { GlobalStateContext } from "../globalContext/GlobalStateContext";

const Home = () => {
  const { postOrder } = useContext(GlobalStateContext);
  const [order, setOrder] = useState({
    id: null,
    name: "",
    date: "",
    products: [],
  });

  const handleChange = (ev) => {
    setOrder({ ...order, [ev.target.name]: ev.target.value });
  };
  const handProductChange = (newProduct) => {
    const productIndex = order.products.findIndex(
      (product) => product.id === newProduct.id
    );
    if (productIndex < 0) {
      setOrder({ ...order, products: [...order.products, newProduct] });
    } else {
      const newProducts = order.products.map((product) => {
        if (product.id === newProduct.id) {
          return newProduct;
        }
        return product;
      });
      setOrder({ ...order, products: newProducts });
    }
  };

  const handOrderChange = () => {
    postOrder(order);
  };
  // console.log(order);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5">Cadastrar Pedido</Typography>
        </Grid>
        <Grid
          item
          xs={8}
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <TextField
            id="standard-basic"
            label="Nome do cliente"
            variant="standard"
            name="name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Data de entrega"
            variant="standard"
            name="date"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <ModalShop onProductChange={handProductChange} />
        </Grid>
        {!!order.products.length && (
          <TableListOrders products={order.products} />
        )}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          margin="auto"
        >
          <Button onClick={handOrderChange} disabled={!order.products.length}>
            Criar Pedido
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
