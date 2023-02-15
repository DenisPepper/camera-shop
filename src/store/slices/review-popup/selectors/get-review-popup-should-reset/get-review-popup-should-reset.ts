import {createSelector} from '@reduxjs/toolkit';
import {ReviewPopupSchema} from '../../schema/review-popup-schema';
import {getReviewPopupSlice} from '../get-review-popup-slice/get-review-popup-slice';

export const getReviewPopupShouldReset = createSelector(
  getReviewPopupSlice,
  (slice: ReviewPopupSchema) => slice.shouldReset
);
