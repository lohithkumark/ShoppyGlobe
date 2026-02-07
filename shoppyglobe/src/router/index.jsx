import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "cart",
        element: <Cart />
      },

      {
        path: "product/:id",
        element: <ProductDetail />
      },

      {
        path: "checkout",
        element: <Checkout />
      },

      {
        path: "orders",
        element: <Orders />
      }
    ]
  }
]);

export default router;
