import {errorSliceActions as actions, errorSliceReducer as reducer} from './error-slice';
import {ErrorSchema as StateSchema} from '../schema/error-schema';
import {ApiError as Error} from '../../../../api/api-error';
import {
  fetchProductByIdWithReviews
} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {fetchProducts} from '../../../../services/fetch-products/fetch-products';
import {fetchPromoProduct} from '../../../../services/fetch-promo-product/fetch-promo-product';
import {fetchSimilar} from '../../../../services/fetch-similar/fetch-similar';
import {postReview} from '../../../../services/post-review/post-review';

describe('test of error-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: StateSchema = {
      errors: [],
    };
    expect(reducer(undefined, {type: undefined})).toEqual(initialState);
  });

  it('should update state with new error', () => {
    const error = 'some error';
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [error]
    };
    expect(reducer(prevState as StateSchema, actions.addError(error)))
      .toEqual(updatedState);
  });

  it('should delete errors from state', () => {
    const error = 'some error';
    const anotherError = 'some another error';
    const prevState: Partial<StateSchema> = {
      errors: [error, anotherError]
    };
    const updatedState: Partial<StateSchema> = {
      errors: []
    };
    expect(reducer(prevState as StateSchema, actions.removeErrors()))
      .toEqual(updatedState);
  });

  it('should add expected error on fetchProductByIdWithReviews.rejected', () => {
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [Error.OnFetchProductByID]
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchProductByIdWithReviews.rejected, payload: Error.OnFetchProductByID}))
      .toEqual(updatedState);
  });

  it('should add expected error on fetchProducts.rejected', () => {
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [Error.OnFetchProducts]
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchProducts.rejected, payload: Error.OnFetchProducts}))
      .toEqual(updatedState);
  });

  it('should add expected error on fetchPromoProduct.rejected', () => {
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [Error.OnFetchPromo]
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchPromoProduct.rejected, payload: Error.OnFetchPromo}))
      .toEqual(updatedState);
  });

  it('should add expected error on fetchSimilar.rejected', () => {
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [Error.OnFetchSimilar]
    };
    expect(reducer(prevState as StateSchema,
      {type: fetchSimilar.rejected, payload: Error.OnFetchSimilar}))
      .toEqual(updatedState);
  });

  it('should add expected error on postReview.rejected', () => {
    const prevState: Partial<StateSchema> = {
      errors: []
    };
    const updatedState: Partial<StateSchema> = {
      errors: [Error.OnPostReview]
    };
    expect(reducer(prevState as StateSchema,
      {type: postReview.rejected, payload: Error.OnPostReview}))
      .toEqual(updatedState);
  });
});


