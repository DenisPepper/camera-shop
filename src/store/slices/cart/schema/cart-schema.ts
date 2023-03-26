import {CartItemType} from '../../../../types/cart-types';
import {ProductType} from '../../../../types/product-type';

export interface CartSchema {
  enabled: boolean;
  product: ProductType | null;
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
}
