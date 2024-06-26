import { RootState } from "..";

const products = (store: RootState) => store.productsStore.products;
const product = (store: RootState) => store.productsStore.product;
const prodLoading = (store: RootState) => store.productsStore.prodLoading;
const singleProdLoading = (store: RootState) => store.productsStore.singleProdLoading;
const errors = (store: RootState) => store.productsStore.errors;

const Selectors = { 
    products,
    product, 
    prodLoading, 
    singleProdLoading, 
    errors
};
export default Selectors;
