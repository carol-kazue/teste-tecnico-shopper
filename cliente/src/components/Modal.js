import * as React from "react";
import Box from "@mui/material/Box";
import MUIModal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import { GlobalStateContext } from "../globalContext/GlobalStateContext";
import { useContext, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #2DA77A",
  boxShadow: 24,
  p: 4,
};

const Modal = ({ title, children, open, handleClose, handleOpen }) => {
  return (
    <MUIModal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </MUIModal>
  );
};
export default Modal;
