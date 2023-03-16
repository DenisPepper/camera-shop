import {StateSchema} from '../../../../state-schema';

export const getProductLoadingStatus = (schema: StateSchema):boolean => schema.product.isProductLoading;
