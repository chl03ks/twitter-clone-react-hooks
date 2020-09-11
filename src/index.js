import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import middleware from "./middleware";

import "./index.css";
import App from "./App";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

