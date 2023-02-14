import {PromoSchema} from './slices/promo/schema/promo-schema';
import {ProductSchema} from './slices/product/schema/product-schema';
import {SimilarSchema} from './slices/similar/schema/similar-schema';
import {ReviewSchema} from './slices/review/schema/review-schema';
import {ReviewPopupSchema} from './slices/review-popup/schema/review-popup-schema';
import {GratefulFeedbackPopupSchema} from './slices/grateful-feedback-popup/schema/grateful-feedback-popup-schema';

export interface StateSchema {
    promo: PromoSchema;
    product: ProductSchema;
    similar: SimilarSchema;
    review: ReviewSchema;
    reviewPopup: ReviewPopupSchema;
    gratefulFeedbackPopup: GratefulFeedbackPopupSchema;
}
