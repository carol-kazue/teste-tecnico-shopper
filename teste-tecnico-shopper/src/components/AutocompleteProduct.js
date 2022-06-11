import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/Autocomplete";
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
const defaultProps = {
  options: rows,
  getOptionLabel: (option) => option.name,
};
const flatProps = {
  options: rows.map((option) => option.name),
};
// const [value, setValue] = (React.useState < FilmOptionType) | (null > null);

const AutocompleteProduct = ({}) => {
  <Autocomplete
    {...defaultProps}
    id="disable-close-on-select"
    disableCloseOnSelect
    renderInput={(params) => (
      <TextField {...params} label="disableCloseOnSelect" variant="standard" />
    )}
  />;
};
export default AutocompleteProduct;
