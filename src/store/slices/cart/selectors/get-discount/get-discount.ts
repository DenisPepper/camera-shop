import {StateSchema} from '../../../../state-schema';

export const getDiscount = (state: StateSchema) => state.cart.discount;
