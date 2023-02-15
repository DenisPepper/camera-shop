import {ReviewPopupSchema} from '../schema/review-popup-schema';
import {createSlice} from '@reduxjs/toolkit';

const initialState: ReviewPopupSchema = {
  isOpen: false,
  shouldReset: false,
};

export const reviewPopupSlice = createSlice({
  name: 'review-popup',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
      state.shouldReset = false;
    },
    close: (state) => {
      state.isOpen = false;
    },
    reset: (state) => {
      state.shouldReset = true;
    },
  },
});

export const {actions: reviewPopupActions} = reviewPopupSlice;
export const {reducer: reviewPopupReducer} = reviewPopupSlice;


