import {PromoProductType} from '../../../../types/promo-product-type';

export interface PromoSchema {
  product: PromoProductType | null;
  isLoaded: boolean;
}
