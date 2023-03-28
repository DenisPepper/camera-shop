import {ProductType} from './product-type';

export interface CartItemType {
  id: number;
  count: number;
}

export interface CartInitType {
  totalCount: number;
  discount: number;
  coupon: string;
  items: CartItemType[];
}

export interface CartProductType extends ProductType {
  count: number;
}

export interface CouponResponseType {
  discount: number;
  coupon: string;
}
