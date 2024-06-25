import { combineReducers } from '@reduxjs/toolkit';

import productsSlice from './ducks/productsSlice';

const rootReducer = combineReducers({ productsStore: productsSlice });

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
