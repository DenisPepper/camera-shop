import {StateSchema} from '../../../../state-schema';

export const getProducts = (state: StateSchema) => state.cart.products;
