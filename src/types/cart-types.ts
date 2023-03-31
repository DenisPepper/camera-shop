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

export type DiscountResponseStatusType = 'Default' | 'Ok' | 'Bad';

export const DiscountResponseStatus: Record<DiscountResponseStatusType, DiscountResponseStatusType> = {
  Default: 'Default',
  Ok: 'Ok',
  Bad: 'Bad',
} as const;
