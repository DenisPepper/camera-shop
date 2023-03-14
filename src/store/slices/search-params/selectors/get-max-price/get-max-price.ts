import {StateSchema} from '../../../../state-schema';

export const getMaxPrice = (state: StateSchema):string => state.searchParams.maxPrice;
