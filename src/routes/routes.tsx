import { createBrowserRouter } from 'react-router-dom';

import ProductsPage from '../pages/ProductsPage';
import NotFound from '../pages/NotFound';
import { ProductModal } from '../components/index';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'products/:prodId',
        element: <ProductModal />,
      },
    ],
  },
]);

export { routes };
