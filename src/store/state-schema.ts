import {PromoSchema} from './slices/promo/schema/promo-schema';
import {ProductSchema} from './slices/product/schema/product-schema';

export interface StateSchema {
    promo: PromoSchema;
    product: ProductSchema;
}
