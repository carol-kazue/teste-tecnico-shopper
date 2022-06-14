import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/Autocomplete";

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
