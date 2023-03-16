import {StateSchema} from '../../../../state-schema';

export const getLoadingStatus = (state: StateSchema):boolean => state.product.isLoading;
