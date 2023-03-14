import {StateSchema} from '../../../../state-schema';

export const getMinPrice = (state: StateSchema):string => state.searchParams.minPrice;
