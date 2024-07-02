import { fireEvent, render, screen } from '@testing-library/react';

import ProductCard from './ProductCard';

import { mockedProduct } from '../../mock';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('ProductCard component', () => {
    test('Navigate to product modal on click', () => {
        render(<ProductCard product={mockedProduct} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockedUsedNavigate).toHaveBeenCalledWith(
            `/products/${mockedProduct.id}`
        );
    });

    it('ProductCard matches Snapshot', () => {
        const view = render(<ProductCard product={mockedProduct} />);
        expect(view).toMatchSnapshot();
    });
});
