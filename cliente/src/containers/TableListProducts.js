import React, { useContext, useEffect } from "react";
import { ModalShopStateContext } from "../globalContext/GlobalStateContext";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton } from "@mui/material";

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

const TableListProducts = ({ products, handleDeleteProduct }) => {
  const { setOpen, setProduct, setQty } = useContext(ModalShopStateContext);
  const handleEditProduct = (product) => {
    setProduct(product);
    setOpen(true);
    setQty(product.qty);
  };
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
            <StyledTableCell>Alterar</StyledTableCell>
            <StyledTableCell>Apagar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: "auto" }}>
          {products?.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="center">{product.price}</StyledTableCell>
              <StyledTableCell align="center">{product.qty}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEditProduct(product)}>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleDeleteProduct(product.id)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableListProducts;
