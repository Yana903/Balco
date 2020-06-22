import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#009688",
//     },
//   },
  overrides: {
    MuiContainer: {
        maxWidthLg: {
        ["@media (min-width: 600px)"]: {
          maxWidth: "500px",
        },
        ["@media (min-width: 960px)"]: {
          maxWidth: "860px",
        },
        ["@media (min-width: 1280px)"]: {
          maxWidth: "1180px",
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "40px",
  marginTop: "0",
  marginBottom: "0",
};

theme.typography.h2 = {
  fontSize: "32px",
  fontWeight: "300",
  marginTop: "0",
  marginBottom: "0",
};

theme.typography.h3 = {
  fontSize: "28px",
  fontWeight: "700",
  marginTop: "0",
  marginBottom: "0",
};

theme.typography.h4 = {
  fontSize: "20px",
  fontWeight: "700",
  marginTop: "0",
  marginBottom: "0",
};

// theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
