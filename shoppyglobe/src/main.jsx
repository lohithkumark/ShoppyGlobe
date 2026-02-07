import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";


import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import router from "./router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
  <RouterProvider router={router} />
  <Toaster position="top-right" />
    </>

  </Provider>
);
