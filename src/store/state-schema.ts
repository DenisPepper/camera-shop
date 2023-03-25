import {PromoSchema} from './slices/promo/schema/promo-schema';
import {ProductSchema} from './slices/product/schema/product-schema';
import {SimilarSchema} from './slices/similar/schema/similar-schema';
import {ReviewSchema} from './slices/review/schema/review-schema';
import {ReviewPopupSchema} from './slices/review-popup/schema/review-popup-schema';
import {GratefulFeedbackPopupSchema} from './slices/grateful-feedback-popup/schema/grateful-feedback-popup-schema';
import {SearchParamsSchema} from './slices/search-params/schema/search-params-schema';
import {ErrorSchema} from './slices/error/schema/error-schema';
import {CartSchema} from './slices/cart/schema/cart-schema';

export interface StateSchema {
    promo: PromoSchema;
    product: ProductSchema;
    similar: SimilarSchema;
    review: ReviewSchema;
    reviewPopup: ReviewPopupSchema;
    gratefulFeedbackPopup: GratefulFeedbackPopupSchema;
    searchParams: SearchParamsSchema;
    error: ErrorSchema;
    cart: CartSchema;
}
