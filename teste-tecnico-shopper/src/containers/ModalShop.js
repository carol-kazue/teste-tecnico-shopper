import { Box, Stack, TextField, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Modal from "../components/Modal";
import Grid from "@mui/material/Grid";
const ModalShop = () => {
  return (
    <Modal title="Adicionar Produto">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            margin={2}
          >
            <TextField
              id="pesquisar-produto"
              label="Pesquisar Produto"
              variant="standard"
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
            <Button color="primary">
              <AddCircleOutlineIcon />
            </Button>
            <TextField
              id="quantidade-produto"
              label="Quantidade"
              variant="standard"
            />
            <Button color="primary">
              <RemoveCircleOutlineIcon />
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
            margin={2}
          >
            <Button variant="contained">Adicionar Produto</Button>
            <Button variant="contained">Cancelar</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalShop;
