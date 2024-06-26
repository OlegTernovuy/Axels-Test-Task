import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { put, call, takeEvery } from '@redux-saga/core/effects';
import { type SagaIterator } from '@redux-saga/core';

import { getRequest } from '../../api';
import { IProducts, IProductsState, ISingleProduct } from '../../types';

const usersInitialState: IProductsState = {
  products: [],
  product: {} as ISingleProduct,
  prodLoading: false,
  singleProdLoading: false,
  errors: '',
};

export const products = createSlice({
  name: 'products',
  initialState: usersInitialState,
  reducers: {
    getProductsAction: (state) => {
      state.errors = '';
      state.prodLoading = true;
    },
    getSingleProductAction: (state) => {
      state.errors = '';
      state.singleProdLoading = true;
    },
    getProductSuccessAction: (state, action: PayloadAction<IProducts>) => {
      state.products = action.payload;
      state.prodLoading = false;
    },
    getSingleProductSuccessAction: (state, action: PayloadAction<ISingleProduct>) => {
      state.product = action.payload;
      state.singleProdLoading = false;
    },
    getProductErrorAction: (state, action: PayloadAction<string>) => {
      state.prodLoading = false;
      state.singleProdLoading = false;
      state.errors = action.payload;
    },
  },
});

export const fetchProducts = createAction('Products/getProductsAction');

export const fetchSingleProduct = createAction('Products/getSingleProductAction');

// Worker
function* getProductsSaga(): SagaIterator {
  try {
    const products: IProducts = yield call(() => getRequest<IProducts>('/prod'));    
    yield put(getProductSuccessAction(products));
  } catch (error) {    
    yield put(getProductErrorAction(error.toString()));
  }
}

function* getSingleProductSaga(id): SagaIterator {
  try {
    const product: ISingleProduct = yield call(() => getRequest<ISingleProduct>(`/prod/${1}`));
    yield put(getSingleProductSuccessAction(product));
  } catch (error) {
    yield put(getProductErrorAction(error.toString()))
  }
}

// Watcher
export function* watchGetProducts(): SagaIterator {
  yield takeEvery(fetchProducts, getProductsSaga);
}

export function* watchGetSingleProduct(): SagaIterator {
  yield takeEvery(fetchSingleProduct, getSingleProductSaga);
}

export const {
  getProductsAction,
  getSingleProductAction,
  getProductSuccessAction,
  getSingleProductSuccessAction,
  getProductErrorAction,
} = products.actions;
export default products.reducer;
