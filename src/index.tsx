import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, StoreProvider} from "./stores/StoreUtils";

const rootStore = createStore();

ReactDOM.render(
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
