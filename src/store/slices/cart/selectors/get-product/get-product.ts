import {StateSchema} from '../../../../state-schema';

export const getProduct = (state: StateSchema) => state.cart.product;
