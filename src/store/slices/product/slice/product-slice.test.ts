import {productActions as actions, productReducer as reducer} from './product-slice';
import {ProductSchema as StateSchema} from '../schema/product-schema';
import {ProductType} from '../../../../types/product-type';

describe('test of product-slice reducer', () => {

  const product: ProductType = {
    id: 0,
    name: 'string',
    vendorCode: 'string',
    type: 'string',
    category: 'string',
    description: 'string',
    level: 'string',
    rating: 0,
    price: 0,
    previewImg: 'string',
    previewImg2x: 'string',
    previewImgWebp: 'string',
    previewImgWebp2x: 'string',
    reviewCount: 0,
  };

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
