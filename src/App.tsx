import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
    NotFound,
    ProductsPage,
    ReactChart,
    ReactGrid,
    ReactScheduler,
} from './pages';
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
    {
        path: '/learnGrid',
        element: <ReactGrid />,
        errorElement: <NotFound />,
    },
    {
        path: '/learnChart',
        element: <ReactChart />,
        errorElement: <NotFound />,
    },
    {
        path: '/learnScheduler',
        element: <ReactScheduler />,
        errorElement: <NotFound />,
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
