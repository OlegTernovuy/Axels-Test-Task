import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import ProductsPage from './ProductsPage';
import { fetchProducts } from '../../redux/ducks/products';

const mockUseDispatch = jest.fn();
const mockUseSelector = jest.fn();

jest.mock('../../redux/ducks/products', () => ({
    fetchProducts: jest.fn(),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockUseDispatch,
    useSelector: () => mockUseSelector,
}));

describe('Products page snapshot component', () => {
    beforeEach(() => {
        mockUseDispatch.mockClear();
        mockUseSelector.mockClear();
    });
    
    test('Renders loading state correctly', () => {
        render(<ProductsPage />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('Dispatches fetchProducts on mount', () => {
        render(<ProductsPage />);
        expect(mockUseDispatch).toHaveBeenCalledWith(fetchProducts());
    });

    it('Matches Snapshot', () => {
        const ProductsPageComponent = renderer
            .create(<ProductsPage />)
            .toJSON();
        expect(ProductsPageComponent).toMatchSnapshot();
    });
});
