import {createSelector} from '@reduxjs/toolkit';
import {getReviewSlice} from '../get-review-slice/get-review-slice';
import {ReviewSchema} from '../../schema/review-schema';


export const getReviewTotalCount = createSelector(
  getReviewSlice,
  (review: ReviewSchema) => review.totalCount);
