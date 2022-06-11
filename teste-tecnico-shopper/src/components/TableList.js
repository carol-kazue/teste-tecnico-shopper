import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
const TableList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Preço&nbsp;(R$)</StyledTableCell>
            <StyledTableCell align="center">
              Quantidade&nbsp;(unid.)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: "auto" }}>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.qtd}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableList;
