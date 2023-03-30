import {cartActions as actions, cartReducer as reducer} from './cart-slice';
import {CartSchema as StateSchema} from '../schema/cart-schema';
import {stubCartItem} from '../../../../mocks/stub-cart-item';
import {stubCartProduct} from '../../../../mocks/stub-cart-product';
import {stubProduct} from '../../../../mocks/stub-product';

describe('test cart-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: StateSchema = {
      disabled: true,
      items: [],
      totalCount: 0,
      addItemPopupIsOpen: false,
      successAddedItemPopupIsOpen: false,
      successPostedOrderPopupIsOpen: false,
      removeItemPopupIsOpen: false,
      product: null,
      products: [],
      coupon: '',
      discount: 0,
      discountIsLoading: false,
      discountResponseStatus: '',
    };

    expect(reducer(undefined, {type: undefined})).toEqual(initialState);
  });

  it('should update state with init-action', () => {
    const values = {
      totalCount: 1,
      discount: 10,
      coupon: 'coupon',
      items: [stubCartItem],
    };
    const prevState: Partial<StateSchema> = {
      items: [],
      totalCount: 0,
      discount: 0,
      coupon: '',
    };
    const updatedState: Partial<StateSchema> = {...values};
    expect(reducer(prevState as StateSchema, actions.init(values))).toEqual(updatedState);
  });

  it('should update state with enable-action', () => {
    const prevState: Partial<StateSchema> = {
      disabled: true,
    };
    const updatedState: Partial<StateSchema> = {
      disabled: false,
    };
    expect(reducer(prevState as StateSchema, actions.enable())).toEqual(updatedState);
  });

  it('should update state with new item', () => {
    const id = 1;
    const prevState: Partial<StateSchema> = {
      items: [],
      totalCount: 0,
    };
    const updatedState: Partial<StateSchema> = {
      items: [stubCartItem],
      totalCount: 1,
    };
    expect(reducer(prevState as StateSchema, actions.addItem(id))).toEqual(updatedState);
  });

  it('should increment total cart count when dispatch addItem action', () => {
    const id = 2;
    const prevState: Partial<StateSchema> = {
      items: [stubCartItem],
      totalCount: 1,
    };
    const updatedState: Partial<StateSchema> = {
      items: [stubCartItem, {id, count: 1}],
      totalCount: 2,
    };
    expect(reducer(prevState as StateSchema, actions.addItem(id))).toEqual(updatedState);
  });

  it('should update item count by id and update total count', () => {
    const id = 1;
    const count = 10;
    const prevState: Partial<StateSchema> = {
      items: [stubCartItem],
      totalCount: 1,
    };
    const updatedState: Partial<StateSchema> = {
      items: [{id, count}],
      totalCount: count,
    };
    expect(reducer(prevState as StateSchema, actions.updateCount({id, count})))
      .toEqual(updatedState);
  });

  it('should remove item from state', () => {
    const prevState: Partial<StateSchema> = {
      items: [stubCartItem],
      totalCount: 1,
    };
    const updatedState: Partial<StateSchema> = {
      items: [],
      totalCount: 0,
    };
    expect(reducer(prevState as StateSchema, actions.removeItem(stubCartItem.id)))
      .toEqual(updatedState);
  });

  it('should update state with products array', () => {
    const prevState: Partial<StateSchema> = {
      products: [],
    };
    const updatedState: Partial<StateSchema> = {
      products: [stubCartProduct],
    };
    expect(reducer(prevState as StateSchema, actions.setProducts([stubCartProduct])))
      .toEqual(updatedState);
  });

  it('should clear products array in state', () => {
    const prevState: Partial<StateSchema> = {
      products: [stubCartProduct],
    };
    const updatedState: Partial<StateSchema> = {
      products: [],
    };
    expect(reducer(prevState as StateSchema, actions.clearProducts()))
      .toEqual(updatedState);
  });

  it('should update state with expected product and update addItemPopupIsOpen with true', () => {
    const prevState: Partial<StateSchema> = {
      product: null,
      addItemPopupIsOpen: false
    };
    const updatedState: Partial<StateSchema> = {
      product: stubCartProduct,
      addItemPopupIsOpen: true
    };
    expect(reducer(prevState as StateSchema, actions.openAddItemPopup(stubCartProduct)))
      .toEqual(updatedState);
  });

  it('should update addItemPopupIsOpen field with false', () => {
    const prevState: Partial<StateSchema> = {
      addItemPopupIsOpen: true
    };
    const updatedState: Partial<StateSchema> = {
      addItemPopupIsOpen: false
    };
    expect(reducer(prevState as StateSchema, actions.closeAddItemPopup()))
      .toEqual(updatedState);
  });

  it('should update successAddedItemPopupIsOpen field with true', () => {
    const prevState: Partial<StateSchema> = {
      successAddedItemPopupIsOpen: false
    };
    const updatedState: Partial<StateSchema> = {
      successAddedItemPopupIsOpen: true
    };
    expect(reducer(prevState as StateSchema, actions.openSuccessAddedItemPopup()))
      .toEqual(updatedState);
  });

  it('should update successAddedItemPopupIsOpen field with false', () => {
    const prevState: Partial<StateSchema> = {
      successAddedItemPopupIsOpen: true
    };
    const updatedState: Partial<StateSchema> = {
      successAddedItemPopupIsOpen: false
    };
    expect(reducer(prevState as StateSchema, actions.closeSuccessAddedItemPopup()))
      .toEqual(updatedState);
  });

  it('should update removeItemPopupIsOpen with true and with expected product', () => {
    const prevState: Partial<StateSchema> = {
      removeItemPopupIsOpen: false,
      product: null,
    };
    const updatedState: Partial<StateSchema> = {
      removeItemPopupIsOpen: true,
      product: stubProduct,
    };
    expect(reducer(prevState as StateSchema, actions.openRemoveItemPopup(stubCartProduct)))
      .toEqual(updatedState);
  });

  it('should update removeItemPopupIsOpen with false', () => {
    const prevState: Partial<StateSchema> = {
      removeItemPopupIsOpen: true
    };
    const updatedState: Partial<StateSchema> = {
      removeItemPopupIsOpen: false
    };
    expect(reducer(prevState as StateSchema, actions.closeRemoveItemPopup()))
      .toEqual(updatedState);
  });

  it('should update successPostedOrderPopupIsOpen with false', () => {
    const prevState: Partial<StateSchema> = {
      successPostedOrderPopupIsOpen: true
    };
    const updatedState: Partial<StateSchema> = {
      successPostedOrderPopupIsOpen: false
    };
    expect(reducer(prevState as StateSchema, actions.closeSuccessPostedOrderPopup()))
      .toEqual(updatedState);
  });

  it('should clear cart', () => {
    const prevState: Partial<StateSchema> = {
      items: [stubCartItem],
      totalCount: 1,
      coupon: 'coupon',
      discount: 10,
      product: stubCartProduct,
      products: [stubCartProduct],
      discountResponseStatus: 'OK',
    };
    const updatedState: Partial<StateSchema> = {
      items: [],
      totalCount: 0,
      coupon: '',
      discount: 0,
      product: null,
      products: [],
      discountResponseStatus: '',
    };
    expect(reducer(prevState as StateSchema, actions.clearCart()))
      .toEqual(updatedState);
  });

});


/*
  it('should ', () => {

  });
 */
