import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductsPage from './ProductsPage';

import { renderWithProviders } from '../../utils/utils-test';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('ProductPage component', () => {
    test('Render ProductPage loading state correctly', () => {
        renderWithProviders(<ProductsPage />, {
            preloadedState: {
                productsStore: {
                    products: [],
                    prodLoading: true,
                },
            },
        });

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('ProductPage matches Snapshot', () => {
        const view = renderWithProviders(<ProductsPage />);
        expect(view).toMatchSnapshot();
    });
});
