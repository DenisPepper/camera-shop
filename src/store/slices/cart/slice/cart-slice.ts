import {CartSchema} from '../schema/cart-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartInitType, CartItemType, CartProductType, CouponResponseType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';
import {postCoupon} from '../../../../services/post-coupon/post-coupon';
import {postOrder} from '../../../../services/post-order/post-order';

const initialState: CartSchema = {
  disabled: true,
  items: [],
  totalCount: 0,
  addItemPopupIsOpen: false,
  successAddedItemPopupIsOpen: false,
  successPostedOrderPopupIsOpen: false,
  removeItemPopupIsOpen: false,
  product: null,
  products: [],
  coupon: '',
  discount: 0,
  discountIsLoading: false,
  discountResponseStatus: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    init: (state, action: PayloadAction<CartInitType>) => {
      state.items = action.payload.items;
      state.totalCount = action.payload.totalCount;
      state.discount = action.payload.discount;
      state.coupon = action.payload.coupon;
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

    setProducts: (state, action: PayloadAction<CartProductType[]>) => {
      state.products = action.payload;
    },

    clearProducts: (state) => {
      state.products = [];
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

    openRemoveItemPopup: (state, action: PayloadAction<CartProductType>) => {
      state.product = action.payload;
      state.removeItemPopupIsOpen = true;
    },

    closeRemoveItemPopup: (state) => {
      state.removeItemPopupIsOpen = false;
    },

    closeSuccessPostedOrderPopup: (state) => {
      state.successPostedOrderPopupIsOpen = false;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.coupon = '';
      state.discount = 0;
      state.product = null;
      state.products = [];
      state.discountResponseStatus = '';
    },
  },

  extraReducers(builder) {
    builder
      .addCase(postCoupon.pending, (state) => {
        state.discountIsLoading = true;
      })
      .addCase(postCoupon.fulfilled, (state, action: PayloadAction<CouponResponseType>) => {
        state.discount = action.payload.discount;
        state.coupon = action.payload.coupon;
        state.discountResponseStatus = 'OK';
        state.discountIsLoading = false;
      })
      .addCase(postCoupon.rejected, (state) => {
        state.discount = 0;
        state.coupon = '';
        state.discountResponseStatus = 'BAD';
        state.discountIsLoading = false;
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.successPostedOrderPopupIsOpen = true;
      });
  }
});

export const {actions: cartActions} = cartSlice;
export const {reducer: cartReducer} = cartSlice;
