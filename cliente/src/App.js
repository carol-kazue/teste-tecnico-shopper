import React from "react";
import Router from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "../src/globalStyle/theme";
import GlobalStyle from "./globalStyle/GlobalStyle";
import GlobalState from "./globalContext/GlobalState";
import DrawerMenu from "./components/DrawerMenu";

const App = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <GlobalState>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </MuiThemeProvider>
      </GlobalState>
    </>
  );
};

export default App;
