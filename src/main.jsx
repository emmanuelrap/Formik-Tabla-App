import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import Footer from "./components/bars/Footer";

import store from "./redux/store/store";
import { Provider } from "react-redux";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
      <Footer></Footer>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
