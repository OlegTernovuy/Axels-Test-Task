import { createSlice, createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from '@redux-saga/core/effects';

const usersInitialState = {
  products: [],
  product: {},
  loading: false,
};

export const productsSlice = createSlice({
  name: 'Products',
  initialState: usersInitialState,
  reducers: {
    getProductAction: (state, action) => {
      state.loading = true;
    },
    getProductSuccessAction: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

export const fetchProducts = createAction('Products/getProductAction');

// Worker
function* getProductSaga() {
  try {
    const response = yield fetch(`http://demo2663713.mockable.io/prod`);
    const json = yield response.json();
    yield put(getProductSuccessAction(json.data));
  } catch (error) {
    console.log(error);
  }
}

// Watcher
export function* watchGetProducts() {
  yield takeEvery(fetchProducts, getProductSaga);
}

export const {
  getProductAction,
  getProductSuccessAction,
  getProductsErrorAction,
} = productsSlice.actions;
export default productsSlice.reducer;
