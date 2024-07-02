import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductModal from './ProductModal';

import { renderWithProviders } from '../../utils/utils-test';
import { mockedProduct } from '../../mock';

const mockUseParams = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockUseParams(),
    useNavigate: () => mockedUsedNavigate,
}));

describe('ProductModal component', () => {
    beforeEach(() => {
        mockUseParams.mockReturnValue({ prodId: '1' });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Render product modal loading state correctly', () => {
        renderWithProviders(<ProductModal />, {
            preloadedState: {
                productsStore: {
                    product: mockedProduct,
                    singleProdLoading: true,
                },
            },
        });
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('Render product modal with data correctly', () => {
        renderWithProviders(<ProductModal />, {
            preloadedState: {
                productsStore: {
                    product: mockedProduct,
                    singleProdLoading: false,
                },
            },
        });
        expect(screen.getByText(mockedProduct.title)).toBeInTheDocument();
    });

    test('ProductModal matches Snapshot', () => {
        const view = renderWithProviders(<ProductModal />);
        expect(view).toMatchSnapshot();
    });
});
