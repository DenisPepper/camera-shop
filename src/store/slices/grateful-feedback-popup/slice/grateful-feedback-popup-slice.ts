import {createSlice} from '@reduxjs/toolkit';
import {GratefulFeedbackPopupSchema} from '../schema/grateful-feedback-popup-schema';

const initialState: GratefulFeedbackPopupSchema = {
  isOpen: false,
};

export const gratefulFeedbackPopupSlice = createSlice({
  name: 'grateful-feedback-popup',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const {actions: gratefulFeedbackPopupActions} = gratefulFeedbackPopupSlice;
export const {reducer: gratefulFeedbackPopupReducer} = gratefulFeedbackPopupSlice;
