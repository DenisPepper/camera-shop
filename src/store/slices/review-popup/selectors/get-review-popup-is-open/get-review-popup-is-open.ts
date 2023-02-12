import {createSelector} from '@reduxjs/toolkit';
import {ReviewPopupSchema} from '../../schema/review-popup-schema';
import {getReviewPopupSlice} from '../get-review-popup-slice/get-review-popup-slice';

export const getReviewPopupIsOpen = createSelector(
  getReviewPopupSlice,
  (slice: ReviewPopupSchema) => slice.isOpen
);
