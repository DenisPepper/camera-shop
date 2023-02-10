import {PromoSchema} from './slices/promo/schema/promo-schema';
import {ProductSchema} from './slices/product/schema/product-schema';
import {SimilarSchema} from './slices/similar/schema/similar-schema';
import {ReviewSchema} from './slices/review/schema/review-schema';

export interface StateSchema {
    promo: PromoSchema;
    product: ProductSchema;
    similar: SimilarSchema;
    review: ReviewSchema;
}
