import { Box, TextField, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Modal from "../components/Modal";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

const ModalShop = () => {
  const defaultProps = {
    options: rows,
    getOptionLabel: (option) => option.name,
  };
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
            <Autocomplete
              {...defaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
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
const rows = [
  {
    id: 1,
    name: "Banana",
    price: 3.0,
    qtd: 20,
  },
  {
    id: 2,
    name: "sabão em pó",
    price: 10.0,
    qtd: 40,
  },
  {
    id: 3,
    name: "Batata",
    price: 3.0,
    qtd: 25,
  },
  {
    id: 4,
    name: "Uva",
    price: 8.5,
    qtd: 30,
  },
  {
    id: 5,
    name: "Detergente",
    price: 2.0,
    qtd: 55,
  },
];
export default ModalShop;
