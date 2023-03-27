import {ProductType} from './product-type';

export interface CartItemType {
  id: number;
  count: number;
}

export interface CartInitType {
  totalCount: number;
  items: CartItemType[];
}

export interface CartProductType extends ProductType {
  count: number;
}
