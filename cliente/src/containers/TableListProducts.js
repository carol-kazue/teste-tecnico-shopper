import React, { useContext, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "../globalContext/GlobalStateContext";
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

const TableListProducts = ({ products }) => {
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
          {products?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.qty}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableListProducts;
