import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../containers/ProductDetails";
import ProductListing from "../containers/ProductListing";
import ErrorPage from "../containers/ErrorPage";
import AppLayout from "../containers/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListing />
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />
      },
    ]
  }
]);

export default routes;