import {getGratefulFeedbackPopupSlice} from '../get-grateful-feedback-popup-slice/get-grateful-feedback-popup-slice';
import {GratefulFeedbackPopupSchema} from '../../schema/grateful-feedback-popup-schema';
import {createSelector} from '@reduxjs/toolkit';

export const getGratefulFeedbackPopupIsOpen = createSelector(
  getGratefulFeedbackPopupSlice,
  (gratefulFeedbackPopup: GratefulFeedbackPopupSchema) => gratefulFeedbackPopup.isOpen);


