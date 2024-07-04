import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import NotFound from './pages/NotFound';
import { Footer, Header, ProductModal } from './components';
import { AppDiv } from './styled/StyledApp';
import LearnReactGrid from './pages/LearnReactGrid';
import ReactChart from './pages/ReactChart';

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
        element: <LearnReactGrid />,
        errorElement: <NotFound />,
    },
    {
        path: '/learnChart',
        element: <ReactChart />,
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
