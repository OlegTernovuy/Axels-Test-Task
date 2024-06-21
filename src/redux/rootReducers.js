import { combineReducers } from '@reduxjs/toolkit';

import productsSlice from './ducks/productsSlice';

const rootReducer = combineReducers({ productsStore: productsSlice });

export default rootReducer;
