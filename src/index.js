import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore } from "redux";

import ReduxThunk from "redux-thunk";

import "./styles.css";
import reducers from "./reducers/index";
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
