import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ProductModal } from '../../components';

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

    it('should render productModal loading state correctly', () => {
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

    it('should render productModal with data correctly', () => {
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

    it('should match a snapshot', () => {
        const view = renderWithProviders(<ProductModal />);
        expect(view).toMatchSnapshot();
    });
});
