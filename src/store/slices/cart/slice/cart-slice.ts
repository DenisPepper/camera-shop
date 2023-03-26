import {CartSchema} from '../schema/cart-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartInitType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';

const initialState: CartSchema = {
  enabled: false,
  items: [],
  totalCount: 0,
  addItemPopupIsOpen: false,
  successAddedItemPopupIsOpen: false,
  removeItemPopupIsOpen: false,
  product: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    init: (state, action: PayloadAction<CartInitType>) => {
      state.items = action.payload.items;
      state.totalCount = action.payload.totalCount;
      state.enabled = true;
    },

    addItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((element) => element.id === id);
      if (item) {
        item.count = item.count + 1;
      } else {
        state.items.push({id, count: 1});
      }
      state.totalCount = state.totalCount + 1;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((element) => element.id === id);
      if (item) {
        state.items = state.items.filter((element) => element.id !== id);
        state.totalCount = state.totalCount - item.count;
      }
    },

    openAddItemPopup: (state, action:PayloadAction<ProductType>) => {
      state.product = action.payload;
      state.addItemPopupIsOpen = true;
    },

    closeAddItemPopup: (state) => {
      state.addItemPopupIsOpen = false;
    },

    openSuccessAddedItemPopup: (state) => {
      state.successAddedItemPopupIsOpen = true;
    },

    closeSuccessAddedItemPopup: (state) => {
      state.successAddedItemPopupIsOpen = false;
    },

    openRemoveItemPopup: (state) => {
      state.removeItemPopupIsOpen = true;
    },

    closeRemoveItemPopup: (state) => {
      state.removeItemPopupIsOpen = false;
    },

  },
});

export const {actions: cartActions} = cartSlice;
export const {reducer: cartReducer} = cartSlice;
