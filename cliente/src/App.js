import React from "react";
import Router from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "../src/globalStyle/theme";
import GlobalStyle from "./globalStyle/GlobalStyle";
import GlobalState from "./globalContext/GlobalState";
import DrawerMenu from "./components/DrawerMenu";
import ModalShopState from "./globalContext/ModalShopState";

const App = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <GlobalState>
        <ModalShopState>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <div style={{ padding: `210px 50px` }}>
                <Router />
              </div>
            </ThemeProvider>
          </MuiThemeProvider>
        </ModalShopState>
      </GlobalState>
    </>
  );
};

export default App;
