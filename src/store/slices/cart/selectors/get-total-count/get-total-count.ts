import {StateSchema} from '../../../../state-schema';

export const getTotalCount = (state: StateSchema) => state.cart.totalCount;
