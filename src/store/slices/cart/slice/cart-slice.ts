import {CartSchema} from '../schema/cart-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartInitType, CartItemType, CartProductType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';
import {postCoupon} from '../../../../services/post-coupon/post-coupon';

const initialState: CartSchema = {
  disabled: true,
  items: [],
  totalCount: 0,
  addItemPopupIsOpen: false,
  successAddedItemPopupIsOpen: false,
  removeItemPopupIsOpen: false,
  product: null,
  products: [],
  discount: 0,
  discountIsLoading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    init: (state, action: PayloadAction<CartInitType>) => {
      state.items = action.payload.items;
      state.totalCount = action.payload.totalCount;
    },

    enable: (state) => {
      state.disabled = false;
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

    updateCount: (state, action: PayloadAction<CartItemType>) => {
      const {id, count} = action.payload;
      const item = state.items.find((element) => element.id === id);
      if (item) {
        state.totalCount = state.totalCount - item.count + count;
        item.count = count;
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((element) => element.id === id);
      if (item) {
        state.items = state.items.filter((element) => element.id !== id);
        state.totalCount = state.totalCount - item.count;
      }
    },

    openAddItemPopup: (state, action: PayloadAction<ProductType>) => {
      state.product = action.payload;
      state.addItemPopupIsOpen = true;
    },

    closeAddItemPopup: (state) => {
      state.addItemPopupIsOpen = false;
    },

    openSuccessAddedItemPopup: (state) => {
      state.successAddedItemPopupIsOpen = true;
    },

    closeSuccessAddedItemPopup: (state,) => {
      state.successAddedItemPopupIsOpen = false;
    },

    openRemoveItemPopup: (state, action: PayloadAction<ProductType>) => {
      state.product = action.payload;
      state.removeItemPopupIsOpen = true;
    },

    closeRemoveItemPopup: (state) => {
      state.removeItemPopupIsOpen = false;
    },

    setProducts: (state, action: PayloadAction<CartProductType[]>) => {
      state.products = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(postCoupon.pending, (state) => {
        state.discountIsLoading = true;
      })
      .addCase(postCoupon.fulfilled, (state, action) => {
        state.discount = action.payload;
        state.discountIsLoading = false;
      })
      .addCase(postCoupon.rejected, (state, action) => {
        state.discount = 0;
        state.discountIsLoading = false;
      });
  }
});

export const {actions: cartActions} = cartSlice;
export const {reducer: cartReducer} = cartSlice;
