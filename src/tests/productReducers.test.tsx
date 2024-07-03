import productsReducer, {
    getProductsAction,
    getSingleProductAction,
    getProductSuccessAction,
    getSingleProductSuccessAction,
    getProductErrorAction,
} from '../redux/ducks/products';

import { IProductsState, IProducts, ISingleProduct } from '../types';
import { mockedProduct, mockedProducts } from '../mock';

describe('Products reducer', () => {
    const initialState: IProductsState = {
        products: [],
        product: {} as ISingleProduct,
        prodLoading: false,
        singleProdLoading: false,
        errors: '',
    };

    it('should handle getProductsAction prodLoading state', () => {
        const state = productsReducer(initialState, getProductsAction());
        expect(state.prodLoading).toBe(true);
    });

    it('should handle getProductsAction errors state', () => {
        const state = productsReducer(initialState, getProductsAction());
        expect(state.errors).toBe('');
    });

    it('should handle getSingleProductAction singleProdLoading state', () => {
        const state = productsReducer(initialState, getSingleProductAction());
        expect(state.singleProdLoading).toBe(true);
    });

    it('should handle getSingleProductAction errors state', () => {
        const state = productsReducer(initialState, getSingleProductAction());
        expect(state.errors).toBe('');
    });

    it('should handle getProductSuccessAction products state', () => {
        const products: IProducts = mockedProducts;
        const state = productsReducer(
            initialState,
            getProductSuccessAction(products)
        );
        expect(state.products).toEqual(products);
    });

    it('should handle getProductSuccessAction prodLoading state', () => {
        const products: IProducts = mockedProducts;
        const state = productsReducer(
            initialState,
            getProductSuccessAction(products)
        );
        expect(state.prodLoading).toBe(false);
    });

    it('should handle getSingleProductSuccessAction product state', () => {
        const product: ISingleProduct = mockedProduct;
        const state = productsReducer(
            initialState,
            getSingleProductSuccessAction(product)
        );
        expect(state.product).toEqual(product);
    });

    it('should handle getSingleProductSuccessAction singleProdLoading state', () => {
        const product: ISingleProduct = mockedProduct;
        const state = productsReducer(
            initialState,
            getSingleProductSuccessAction(product)
        );
        expect(state.singleProdLoading).toBe(false);
    });

    it('should handle getProductErrorAction prodLoading state', () => {
        const error = 'Error fetching products';
        const state = productsReducer(
            initialState,
            getProductErrorAction(error)
        );
        expect(state.prodLoading).toBe(false);
    });

    it('should handle getProductErrorAction singleProdLoading state', () => {
        const error = 'Error fetching products';
        const state = productsReducer(
            initialState,
            getProductErrorAction(error)
        );
        expect(state.singleProdLoading).toBe(false);
    });

    it('should handle getProductErrorAction errors state', () => {
        const error = 'Error fetching products';
        const state = productsReducer(
            initialState,
            getProductErrorAction(error)
        );
        expect(state.errors).toBe(error);
    });
});
