import {StateSchema} from '../../../../state-schema';

export const getCartIsDisabled = (state: StateSchema) => state.cart.disabled;
