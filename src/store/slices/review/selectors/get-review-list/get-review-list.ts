import {createSelector} from '@reduxjs/toolkit';
import {getReviewSlice} from '../get-review-slice/get-review-slice';
import {ReviewSchema} from '../../schema/review-schema';


export const getReviewList = createSelector(
  getReviewSlice,
  (review: ReviewSchema) => review.list);
