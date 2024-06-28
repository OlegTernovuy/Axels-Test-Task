import productsReducer, {
    getProductsAction,
    getSingleProductAction,
    getProductSuccessAction,
    getSingleProductSuccessAction,
    getProductErrorAction,
} from './products';
import { IProductsState, IProducts, ISingleProduct } from '../../types';
import { mockedProduct, mockedProducts } from '../../mock';

describe('Products reducer', () => {
    const initialState: IProductsState = {
        products: [],
        product: {} as ISingleProduct,
        prodLoading: false,
        singleProdLoading: false,
        errors: '',
    };

    it('should handle getProductsAction', () => {
        const state = productsReducer(initialState, getProductsAction());
        expect(state.prodLoading).toBe(true);
        expect(state.errors).toBe('');
    });

    it('should handle getSingleProductAction', () => {
        const state = productsReducer(initialState, getSingleProductAction());
        expect(state.singleProdLoading).toBe(true);
        expect(state.errors).toBe('');
    });

    it('should handle getProductSuccessAction', () => {
        const products: IProducts = [mockedProducts];
        const state = productsReducer(
            initialState,
            getProductSuccessAction(products)
        );
        expect(state.products).toEqual(products);
        expect(state.prodLoading).toBe(false);
    });

    it('should handle getSingleProductSuccessAction', () => {
        const product: ISingleProduct = mockedProduct;
        const state = productsReducer(
            initialState,
            getSingleProductSuccessAction(product)
        );
        expect(state.product).toEqual(product);
        expect(state.singleProdLoading).toBe(false);
    });

    it('should handle getProductErrorAction', () => {
        const error = 'Error fetching products';
        const state = productsReducer(
            initialState,
            getProductErrorAction(error)
        );
        expect(state.prodLoading).toBe(false);
        expect(state.singleProdLoading).toBe(false);
        expect(state.errors).toBe(error);
    });
});
