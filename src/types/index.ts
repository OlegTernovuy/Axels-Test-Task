
export interface IProduct {
    id: number;
    title: string;
    img: string;
    desc: string;
}

export interface IComment {
    commentId: number,
    commentText: string;
    rating: number;
  }
  
  export interface IProducts extends Array<IProduct> {
  }
  
  export interface ISingleProduct extends IProduct {
    comments: IComment[];
  }
  
  export interface IProductsState {
    products: IProducts,
    product: ISingleProduct;
    prodLoading: boolean;
    singleProdLoading: boolean;
    errors: string;
  }