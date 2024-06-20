import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/notFoundPage/NotFound";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductModal from "../components/ProductModal";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "products/:prodId",
        element: <ProductModal />,
      },
    ],
  },
]);

export { routes };
