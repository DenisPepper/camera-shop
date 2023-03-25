import {StateSchema} from '../../../../state-schema';

export const getItems = (state: StateSchema) => state.cart.items;
