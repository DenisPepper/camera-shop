import {PromoSchema as Schema} from '../schema/promo-schema';
import {promoReducer as reducer} from './promo-slice';
import {stubPromo} from '../../../../mocks/stub-promo';
import {fetchPromoProduct} from '../../../../services/fetch-promo-product/fetch-promo-product';

describe('test of promo-slice reducer', () => {

  it('should return initial state', () => {
    const initialState: Schema = {
      product: null,
      isLoaded: false,
    };

    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should return promo product on fetchPromoProduct fulfilled', () => {
    const prevState: Schema = {
      product: null,
      isLoaded: false,
    };
    const updatedState: Schema = {
      product: stubPromo,
      isLoaded: true,
    };

    expect(reducer(prevState,
      {
        type: fetchPromoProduct.fulfilled.type,
        payload: stubPromo,
      }
    )).toEqual(updatedState);
  });
});
