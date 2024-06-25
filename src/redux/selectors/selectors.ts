import { RootState } from "../rootReducers";

export const products = (store: RootState) => store.productsStore.products;
export const product = (store: RootState) => store.productsStore.product;
export const prodLoading = (store: RootState) => store.productsStore.prodLoading;
export const singleProdLoading = (store: RootState) => store.productsStore.singleProdLoading;
export const errors = (store: RootState) => store.productsStore.errors;
