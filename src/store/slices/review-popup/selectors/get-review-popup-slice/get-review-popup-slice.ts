import {StateSchema} from '../../../../state-schema';
import {ReviewPopupSchema} from '../../schema/review-popup-schema';

export const getReviewPopupSlice = (state: StateSchema):ReviewPopupSchema => state.reviewPopup;
