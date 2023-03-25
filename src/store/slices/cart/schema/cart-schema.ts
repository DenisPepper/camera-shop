import {CartItemType} from '../../../../types/cart-types';

export interface CartSchema {
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
}
