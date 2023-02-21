import {productActions as actions, productReducer as reducer} from './product-slice';
import {ProductSchema as StateSchema} from '../schema/product-schema';
import {stubProduct as product} from '../../../../mocks/stub-product';

describe('test of product-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: StateSchema = {
      product: null,
      products: [],
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
    };
    expect(reducer(prevState as StateSchema, actions.setProducts([product])))
      .toEqual(updatedState);
  });

});
