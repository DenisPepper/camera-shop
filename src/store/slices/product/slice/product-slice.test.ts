import {productReducer as reducer} from './product-slice';
import {ProductSchema as StateSchema} from '../schema/product-schema';
import {stubProduct as product} from '../../../../mocks/stub-product';
import {
  fetchProductByIdWithReviews
} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {fetchProducts} from '../../../../services/fetch-products/fetch-products';

describe('test of product-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: StateSchema = {
      product: null,
      products: [],
      totalPagesCount: 0,
      isLoading: false,
      isProductLoading: false,
    };
    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with new product list', () => {
    const prevState: Partial<StateSchema> = {
      products: [],
    };
    const updatedState: Partial<StateSchema> = {
      products: [product],
      isLoading: false,
      totalPagesCount: 1,
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchProducts.fulfilled.type, payload: {products: [product], totalPagesCount: 1,}}))
      .toEqual(updatedState);
  });

  it('should update state with new product', () => {
    const prevState: Partial<StateSchema> = {
      product: null,
    };
    const updatedState: Partial<StateSchema> = {
      product: product,
      isProductLoading: false,
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchProductByIdWithReviews.fulfilled.type, payload: {product, reviews: [], reviewCount: 0}}))
      .toEqual(updatedState);
  });

});
