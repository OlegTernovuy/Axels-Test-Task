import { all } from '@redux-saga/core/effects';
import { watchGetProducts, watchGetSingleProduct } from './ducks/productsSlice';

export default function* rootSaga() {
  yield all([watchGetProducts(), watchGetSingleProduct()]);
}
