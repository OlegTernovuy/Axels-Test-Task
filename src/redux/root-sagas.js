import { all } from '@redux-saga/core/effects';
import { watchGetProducts } from './ducks/productsSlice';

export default function* rootSaga() {
  yield all([watchGetProducts()]);
}
