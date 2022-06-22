import { Grid, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModalShop from "../containers/ModalShop";
import TableListOrders from "../containers/TableListProducts";
import { GlobalStateContext } from "../globalContext/GlobalStateContext";

const EditOrder = () => {
  const { getOrderById, order, setOrder, updateOrder } =
    useContext(GlobalStateContext);
  const params = useParams();
  useEffect(() => {
    getOrderById(params.id);
  }, []);

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
  const handleDeleteProduct = (id) => {
    const newOrderProduct = order.products.filter((product) => {
      return product.id !== id;
    });
    console.log(newOrderProduct);
    setOrder({ ...order, products: newOrderProduct });
  };
  const handOrderChange = () => {
    console.log(order);
    updateOrder(order.id, order);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5">Alterar Pedido</Typography>
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
            value={order.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Data de entrega"
            variant="standard"
            name="date"
            value={order.date}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <ModalShop onProductChange={handProductChange} />
        </Grid>
        {!!order.products.length && (
          <TableListOrders
            products={order.products}
            handleDeleteProduct={handleDeleteProduct}
          />
        )}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          margin="auto"
        >
          <Button onClick={handOrderChange} disabled={!order.products.length}>
            Alterar Pedido
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditOrder;
