import {createSlice} from '@reduxjs/toolkit';
import {ReviewSchema} from '../schema/review-schema';
import {fetchReviews} from '../services/fetch-reviews/fetch-reviews';
import {postReview} from '../services/post-review/post-review';

const initialState: ReviewSchema = {
  list: [],
  totalCount: 0,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.totalCount = 0;
        state.list = [];
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.totalCount = action.payload.totalCount;
        state.list = action.payload.reviews;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
        state.totalCount = state.totalCount + 1;
      });
  }
});

export const {actions: reviewActions} = reviewSlice;
export const {reducer: reviewReducer} = reviewSlice;
