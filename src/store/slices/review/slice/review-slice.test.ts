import {ReviewSchema} from '../schema/review-schema';
import {reviewReducer} from './review-slice';
import {stubReview} from '../../../../mocks/stub-review';
import {postReview} from '../services/post-review/post-review';
import {
  fetchProductByIdWithReviews
} from '../../product/services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {stubProduct} from '../../../../mocks/stub-product';

describe('test of review-slice reducer', () => {

  it('should return initial state', () => {
    const initialState: ReviewSchema = {
      list: [],
      totalCount: 0,
    };

    expect(reviewReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should return zero count and empty array on fetchProductByIdWithReviews pending', () => {
    const prevState: ReviewSchema = {
      list: [stubReview],
      totalCount: 1,
    };
    const updatedState: ReviewSchema = {
      list: [],
      totalCount: 0,
    };

    expect(reviewReducer(
      prevState,
      {type: fetchProductByIdWithReviews.pending.type})).toEqual(updatedState);
  });

  it('should return count and filled array on fetchProductByIdWithReviews fulfilled', () => {
    const prevState: ReviewSchema = {
      list: [],
      totalCount: 0,
    };
    const updatedState: ReviewSchema = {
      list: [stubReview],
      totalCount: 1,
    };

    expect(reviewReducer(
      prevState,
      {
        type: fetchProductByIdWithReviews.fulfilled.type,
        payload: {
          reviews: [stubReview],
          reviewCount: [stubReview].length,
          product: stubProduct
        }
      }
    )).toEqual(updatedState);
  });

  it('should return object on postReview fulfilled', () => {
    const prevState: ReviewSchema = {
      list: [],
      totalCount: 0,
    };
    const updatedState: ReviewSchema = {
      list: [stubReview],
      totalCount: 1,
    };

    expect(reviewReducer(prevState,
      {
        type: postReview.fulfilled.type,
        payload: stubReview
      }
    )).toEqual(updatedState);
  });

});
