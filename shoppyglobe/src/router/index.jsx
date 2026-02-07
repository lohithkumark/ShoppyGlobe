import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />
      },

      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/checkout",
        element: <Checkout />
      },

      {
        path: "/orders",
        element: <Orders />
      },

      {
        path: "/product/:id",
        element: <ProductDetail />
      }
    ]
  }
]);

export default router;
