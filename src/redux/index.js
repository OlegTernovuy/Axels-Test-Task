import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { all } from '@redux-saga/core/effects';

import productsSlice, { watchGetProducts, watchGetSingleProduct } from './ducks/products';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ productsStore: productsSlice });

const rootSaga = function* () {
  yield all([watchGetProducts(), watchGetSingleProduct()]);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
