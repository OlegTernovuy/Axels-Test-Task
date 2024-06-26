import { createSlice, createAction } from '@reduxjs/toolkit';
import { put, call, takeEvery } from '@redux-saga/core/effects';

import { getRequest } from '../../api';

const usersInitialState = {
  products: [],
  product: {},
  prodLoading: false,
  singleProdLoading: false,
  errors: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: usersInitialState,
  reducers: {
    getProductsAction: (state, action) => {
      state.errors = '';
      state.prodLoading = true;
    },
    getSingleProductAction: (state, action) => {
      state.errors = '';
      state.singleProdLoading = true;
    },
    getProductSuccessAction: (state, action) => {
      state.products = action.payload;
      state.prodLoading = false;
    },
    getSingleProductSuccessAction: (state, action) => {
      state.product = action.payload;
      state.singleProdLoading = false;
    },
    getProductErrorAction: (state, action) => {
      state.prodLoading = false;
      state.singleProdLoading = false;
      state.errors = action.payload;
    },
  },
});

export const fetchProducts = createAction('products/getProductsAction');

export const fetchSingleProduct = createAction('products/getSingleProductAction');

// Worker
function* getProductsSaga() {
  try {
    const products = yield call(() => getRequest('/prod'));
    yield put(getProductSuccessAction(products));
  } catch (error) {
    yield put(getProductErrorAction(error.message))
  }
}

function* getSingleProductSaga(id) {
  try {
    const product = yield call(() => getRequest(`/prod/${1}`));
    yield put(getSingleProductSuccessAction(product));
  } catch (error) {
    yield put(getProductErrorAction(error.message))
  }
}

// Watcher
export function* watchGetProducts() {
  yield takeEvery(fetchProducts, getProductsSaga);
}

export function* watchGetSingleProduct() {
  yield takeEvery(fetchSingleProduct, getSingleProductSaga);
}

export const {
  getProductsAction,
  getSingleProductAction,
  getProductSuccessAction,
  getSingleProductSuccessAction,
  getProductErrorAction,
} = productsSlice.actions;
export default productsSlice.reducer;
