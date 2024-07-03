import { fireEvent, render, screen } from '@testing-library/react';

import { ProductCard } from '../components';

import { mockedProduct } from '../mock';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('ProductCard component', () => {
    it('should navigate to product modal on click', () => {
        render(<ProductCard product={mockedProduct} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockedUsedNavigate).toHaveBeenCalledWith(
            `/products/${mockedProduct.id}`
        );
    });

    it('should match a snapshot', () => {
        const view = render(<ProductCard product={mockedProduct} />);
        expect(view).toMatchSnapshot();
    });
});
