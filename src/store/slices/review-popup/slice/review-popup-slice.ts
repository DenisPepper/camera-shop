import {ReviewPopupSchema} from '../schema/review-popup-schema';
import {createSlice} from '@reduxjs/toolkit';

const initialState: ReviewPopupSchema = {
  isOpen: false
};

export const reviewPopupSlice = createSlice({
  name: 'review-popup',
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

export const {actions: reviewPopupActions} = reviewPopupSlice;
export const {reducer: reviewPopupReducer} = reviewPopupSlice;


