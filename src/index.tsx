import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

import MainPage from "./pages/main";

const initialState = window.initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
