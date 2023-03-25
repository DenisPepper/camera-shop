import {StateSchema} from '../../../../state-schema';

export const getResetMark = (state: StateSchema) => state.cart.shouldReset;
