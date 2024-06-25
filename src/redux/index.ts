import createSagaMiddleware from '@redux-saga/core';
import { configureStore, Tuple } from '@reduxjs/toolkit';

import rootReducer from './rootReducers';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export default store;
