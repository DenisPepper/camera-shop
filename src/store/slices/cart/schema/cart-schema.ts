import {CartItemType, CartProductType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';

export interface CartSchema {
  disabled: boolean;
  product: ProductType | null;
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  successPostedOrderPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
  products: CartProductType[];
  coupon: string;
  discount: number;
  discountIsLoading: boolean;
  discountResponseStatus: 'OK' | 'BAD' | '';
}
