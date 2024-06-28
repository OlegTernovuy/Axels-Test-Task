import { runSaga } from 'redux-saga';

import {
    getProductErrorAction,
    getProductsSaga,
    getProductSuccessAction,
    getSingleProductSaga,
    getSingleProductSuccessAction,
} from './products';
import { getRequest } from '../../api';
import { mockedProduct, mockedProducts } from '../../mock';
import { IProducts, ISingleProduct } from '../../types';

jest.mock('../../api', () => ({
    getRequest: jest.fn(),
}));

describe('Products saga', () => {
    it('should handle getProductsSaga()', async () => {
        const dispatched: any[] = [];
        const products: IProducts = [mockedProducts];

        (getRequest as jest.Mock).mockResolvedValue(products);

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getProductsSaga
        ).toPromise();

        expect(dispatched).toEqual([getProductSuccessAction(products)]);
    });

    it('should handle getSingleProductSaga()', async () => {
        const dispatched: any[] = [];
        const product: ISingleProduct = mockedProduct;

        (getRequest as jest.Mock).mockResolvedValue(product);

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getSingleProductSaga,
            { payload: { id: 1 } }
        ).toPromise();

        expect(dispatched).toEqual([getSingleProductSuccessAction(product)]);
    });

    it('should handle errors in getProductsSaga()', async () => {
        const dispatched: any[] = [];
        const errors = 'Some errors';

        (getRequest as jest.Mock).mockRejectedValue(errors);

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getProductsSaga
        ).toPromise();

        expect(dispatched).toEqual([getProductErrorAction(errors)]);
    });

    it('should handle errors in getSingleProductSaga()', async () => {
        const dispatched: any[] = [];
        const errors = 'Some errors';

        (getRequest as jest.Mock).mockRejectedValue(errors);

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getSingleProductSaga,
            { payload: { id: 1 } }
        ).toPromise();

        expect(dispatched).toEqual([getProductErrorAction(errors)]);
    });
});
