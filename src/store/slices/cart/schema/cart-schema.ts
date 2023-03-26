import {CartItemType} from '../../../../types/cart-types';

export interface CartSchema {
  enabled: boolean;
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
}
