import {CartItemType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';

export interface CartSchema {
  disabled: boolean;
  product: ProductType | null;
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
}
