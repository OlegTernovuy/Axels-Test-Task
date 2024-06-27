import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import { all } from '@redux-saga/core/effects';

import products, { watchGetProducts, watchGetSingleProduct } from './ducks/products';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ productsStore: products });

const rootSaga = function* () {
  yield all([watchGetProducts(), watchGetSingleProduct()]);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export default store;
