import {createSlice} from '@reduxjs/toolkit';
import {ReviewSchema} from '../schema/review-schema';
import {fetchReviews} from '../services/fetch-reviews/fetch-reviews';

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
      });
  }
});

export const {actions: reviewActions} = reviewSlice;
export const {reducer: reviewReducer} = reviewSlice;
