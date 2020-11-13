import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import getStore from "./redux/main";

import App from "./App";
const store = getStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
