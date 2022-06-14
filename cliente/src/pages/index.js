import { Button } from "@mui/material";
// import { palette } from "@mui/system";
// import theme from "../globalStyle/theme";
import DrawerMenu from "../components/DrawerMenu";
import ModalShop from "../containers/ModalShop";
import Modal from "../components/Modal";
import ModalAlert from "../containers/ModalAlert";
import TableListProducts from "../containers/TableListProducts";

const Index = () => {
  return (
    <div>
      {/* <h1>intex</h1> */}
      {/* <DrawerMenu></DrawerMenu> */}
      <ModalShop />
    </div>
  );
};

export default Index;
