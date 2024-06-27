// import renderer from 'react-test-renderer';

// import ProductModal from './ProductModal';

// const mockUseParams = jest.fn();
// const mockedUsedNavigate = jest.fn();
// const mockUseDispatch = jest.fn();
// const mockUseSelector = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual<object>('react-router-dom'),
//     useParams: () => mockUseParams,
// }));

// jest.mock('react-router-dom', () => ({
//     ...(jest.requireActual('react-router-dom') as any),
//     useNavigate: () => mockedUsedNavigate,
// }));

// jest.mock('react-redux', () => ({
//     ...jest.requireActual<object>('react-redux'),
//     useDispatch: () => mockUseDispatch,
//     useSelector: () => mockUseSelector,
// }));

// describe('Product modal snapshot component', () => {
//     beforeEach(() => {
//         mockUseDispatch.mockClear();
//         mockUseSelector.mockClear();
//     });

//     it('Matches Snapshot', () => {
//         const productModalComponent = renderer
//             .create(<ProductModal />)
//             .toJSON();
//         expect(productModalComponent).toMatchSnapshot();
//     });
// });


import renderer from 'react-test-renderer';
import ProductModal from './ProductModal';
import { mockedProduct } from '../../mock'; // Assuming you have mock data for a single product
import Selectors from '../../redux/ducks/selectors';

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

describe('Product modal snapshot component', () => {
  beforeEach(() => {
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
    // mockUseDispatch.mockReturnValue(jest.fn());
  });

  it('Matches Snapshot', () => {
    mockUseSelector.mockImplementation((selector) => {
      if (selector === Selectors.product) {
        return mockedProduct;
      } else if (selector === Selectors.singleProdLoading) {
        return false;
      }
    });

    const productModalComponent = renderer
      .create(<ProductModal />)
      .toJSON();
    expect(productModalComponent).toMatchSnapshot();
  });
});