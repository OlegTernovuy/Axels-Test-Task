import { createSlice, createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from '@redux-saga/core/effects';

const usersInitialState = {
  products: [],
  product: {},
  loading: false,
  errors: '',
};

export const productsSlice = createSlice({
  name: 'Products',
  initialState: usersInitialState,
  reducers: {
    getProductsAction: (state, action) => {
      state.errors = '';
      state.loading = true;
    },
    getSingleProductAction: (state, action) => {
      state.errors = '';
    },
    getProductSuccessAction: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    getSingleProductSuccessAction: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    getProductErrorAction: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export const fetchProducts = createAction('Products/getProductsAction');

export const fetchSingleProduct = createAction('Products/getSingleProductAction');

// Worker
function* getProductsSaga() {
  try {
    const response = yield fetch(`http://demo2663713.mockable.io/prod`);
    const json = yield response.json();
    yield put(getProductSuccessAction(json.data));
  } catch (error) {
    yield put(getProductErrorAction(error.message))
  }
}

function* getSingleProductSaga(id) {
  try {
    const response = yield fetch(`http://demo2663713.mockable.io/prod/${1}`);
    const json = yield response.json();
    yield put(getSingleProductSuccessAction(json.data[0]));
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
