import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReviewSchema} from '../schema/review-schema';
import {fetchReviewList} from '../services/fetch-review-list/fetch-review-list';
import {fetchReviewTotalCount} from '../services/fetch-review-total-count/fetch-review-total-count';
import {ReviewType} from '../../../../types/review-type';

const initialState: ReviewSchema = {
  list: [],
  totalCount: 0,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setList: (state, action: PayloadAction<ReviewType[]>) => {
      state.list = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchReviewTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      });
  }
});

export const {actions: reviewActions} = reviewSlice;
export const {reducer: reviewReducer} = reviewSlice;
