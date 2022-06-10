import React from "react";
import Router from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "../src/globalStyle/theme";
import GlobalStyle from "./globalStyle/GlobalStyle";

const App = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default App;
