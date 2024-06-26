const products = (store) => store.productsStore.products;
const product = (store) => store.productsStore.product;
const prodLoading = (store) => store.productsStore.prodLoading;
const singleProdLoading = (store) => store.productsStore.singleProdLoading;
const errors = (store) => store.productsStore.errors;

const Selectors = { 
    products,
    product, 
    prodLoading, 
    singleProdLoading, 
    errors
};
export default Selectors;
