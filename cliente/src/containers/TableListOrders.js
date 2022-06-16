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
import Button from "@mui/material/Button";
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
const TableListOrders = () => {
  const { orders, getOrders } = useContext(GlobalStateContext);
  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Data</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: "auto" }}>
          {orders?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">
                <Button>Alterar</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableListOrders;
