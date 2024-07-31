import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { LANGUAGES_ITEM } from "./data/Languages_item";
import { LANGUAGES_APP } from "./data/Languages_app";

import "./index.scss";

const DEFAULT_STATE = {
  lang_item: LANGUAGES_ITEM.en_us,
  lang_app: LANGUAGES_APP.en_us,
  lang_iso: "en_us",
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LANG_ITEM":
      return { ...state, lang_item: action.payload };
    case "LANG_APP":
      return { ...state, lang_app: action.payload };
    case "LANG_ISO":
      return { ...state, lang_iso: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
