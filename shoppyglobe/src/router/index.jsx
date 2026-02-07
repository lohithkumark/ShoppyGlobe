import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "../App";
import NotFound from "../pages/NotFound";

/* Lazy Loaded Pages */

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Orders = lazy(() => import("../pages/Orders"));

/* Loader Component */

function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h3>Loading...</h3>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      },

      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        )
      },

      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>
        )
      },

      {
        path: "checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        )
      },

      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
