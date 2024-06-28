import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductModal from './ProductModal';
import { fetchSingleProduct } from '../../redux/ducks/products';

const mockUseParams = jest.fn();
const mockedUsedNavigate = jest.fn();
const mockUseDispatch = jest.fn();
const mockUseSelector = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockUseParams(),
    useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockUseDispatch,
    useSelector: () => mockUseSelector,
}));

jest.mock('../../redux/ducks/products', () => ({
    fetchSingleProduct: jest.fn(),
}));

describe('Product modal component', () => {
    beforeEach(() => {
        mockUseParams.mockReturnValue({ id: '1' });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Matches Snapshot', () => {
        const { asFragment } = render(<ProductModal />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Dispatches fetchSingleProduct on mount', () => {
        render(<ProductModal />);
        expect(mockUseDispatch).toHaveBeenCalledWith(fetchSingleProduct());
    });

    it('renders loading state correctly', () => {
        render(<ProductModal />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });
});
