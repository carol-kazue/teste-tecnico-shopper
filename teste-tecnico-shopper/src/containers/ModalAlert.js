import { Button } from "@mui/material";
import Modal from "../components/Modal";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const ModalAlert = () => {
  return (
    <Modal title="Ops... Sinto muito, parece que não temos essa quantidade em estoque">
      <Button variant="contained">Escolher outro produto</Button>
    </Modal>
  );
};
export default ModalAlert;
