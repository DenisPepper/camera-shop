import {productReducer as reducer} from './product-slice';
import {ProductSchema as StateSchema} from '../schema/product-schema';
import {stubProduct as product} from '../../../../mocks/stub-product';
import {fetchProductByIdWithReviews} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';

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

  /* it('should update state with new product list', () => {
    const prevState: Partial<StateSchema> = {
      products: [],
    };
    const updatedState: Partial<StateSchema> = {
      products: [product],
    };
    expect(reducer(prevState as StateSchema, actions.setProducts([product])))
      .toEqual(updatedState);
  });*/

  it('should update state with new product', () => {
    const prevState: Partial<StateSchema> = {
      product: null
    };
    const updatedState: Partial<StateSchema> = {
      product: product
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchProductByIdWithReviews.fulfilled.type, payload: {product, reviews: [], reviewCount: 0}}))
      .toEqual(updatedState);
  });

});
