import {PromoSchema} from './slices/promo/types/promo-schema';
import {ProductSchema} from './slices/product/types/product-schema';

export interface StateSchema {
    promo: PromoSchema;
    product: ProductSchema;
}
