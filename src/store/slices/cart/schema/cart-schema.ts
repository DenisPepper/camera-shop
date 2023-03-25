import {CartItemType} from '../../../../types/cart-types';

export interface CartSchema {
  shouldInit: boolean;
  shouldReset: boolean;
  items: CartItemType[];
  totalCount: number;
  addItemPopupIsOpen: boolean;
  successAddedItemPopupIsOpen: boolean;
  removeItemPopupIsOpen: boolean;
}
