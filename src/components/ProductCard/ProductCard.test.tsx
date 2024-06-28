import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import ProductCard from './ProductCard';
import { mockedProduct } from '../../mock';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Product card snapshot component', () => {
    test('Navigate to product modal on click', () => {
        render(<ProductCard product={mockedProduct} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockedUsedNavigate).toHaveBeenCalledWith(
            `/products/${mockedProduct.id}`
        );
    });

    it('Matches Snapshot', () => {
        const productCardComponent = renderer
            .create(<ProductCard product={mockedProduct} />)
            .toJSON();
        expect(productCardComponent).toMatchSnapshot();
    });
});
