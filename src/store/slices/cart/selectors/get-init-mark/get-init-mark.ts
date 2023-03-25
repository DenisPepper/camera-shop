import {StateSchema} from '../../../../state-schema';

export const getInitMark = (state: StateSchema) => state.cart.shouldInit;
