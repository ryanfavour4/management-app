import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RootStore } from "./services/context/RootContextStore";
import { Provider } from "react-redux";
import store from "./services/store/RootStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootStore>
      <Provider store={store}>
        <App />
      </Provider>
    </RootStore>
  </React.StrictMode>
);
