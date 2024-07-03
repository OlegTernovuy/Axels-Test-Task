import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import NotFound from './pages/NotFound';
import { Footer, Header, ProductModal } from './components';
import { AppDiv } from './styled/StyledApp';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'products/:id',
                element: <ProductModal />,
            },
        ],
    },
]);

function App() {
    return (
        <AppDiv>
            <Header />
            <RouterProvider router={routes} />
            <Footer />
        </AppDiv>
    );
}

export default App;
