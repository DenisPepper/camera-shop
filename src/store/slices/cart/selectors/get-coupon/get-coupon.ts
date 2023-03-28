import {StateSchema} from '../../../../state-schema';

export const getCoupon = (state: StateSchema) => state.cart.coupon;
