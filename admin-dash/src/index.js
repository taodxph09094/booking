import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";

import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </AlertProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
