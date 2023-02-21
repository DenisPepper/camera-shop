import {ReviewSchema} from '../schema/review-schema';
import {reviewReducer} from './review-slice';
import {stubReview} from '../../../../mocks/stub-review';
import {fetchReviews} from '../services/fetch-reviews/fetch-reviews';
import {postReview} from '../services/post-review/post-review';

describe('test of review-slice reducer', () => {

  it('should return initial state', () => {
    const initialState: ReviewSchema = {
      list: [],
      totalCount: 0,
    };

    expect(reviewReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should return zero count and empty array on fetchReviews pending', () => {
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
      {type: fetchReviews.pending.type})).toEqual(updatedState);
  });

  it('should return count and filled array on fetchReviews fulfilled', () => {
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
        type: fetchReviews.fulfilled.type,
        payload: {reviews: [stubReview], totalCount: [stubReview].length}
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
