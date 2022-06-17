import { Typography } from "@mui/material";
import TableListOrders from "../containers/TableListOrders";

const HistoryOrder = () => {
  return (
    <>
      <Typography variant="h5">Histórico de Pedidos</Typography>
      <TableListOrders />
    </>
  );
};

export default HistoryOrder;
