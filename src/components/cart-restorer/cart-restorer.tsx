import {useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
//import {getTotalCount} from '../../store/slices/cart/selectors/get-total-count/get-total-count';
//import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {getInitMark} from '../../store/slices/cart/selectors/get-init-mark/get-init-mark';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {getResetMark} from '../../store/slices/cart/selectors/get-reset-mark/get-reset-mark';
import {CartItemType} from '../../types/cart-types';

const CartStorageKey = {
  CartTotalCount: 'CART_TOTAL_COUNT',
  CartItems: 'CART_ITEMS'
} as const;

const getItemsFromStorage = (): CartItemType[] => {
  const itemsFromStorage = localStorage.getItem(CartStorageKey.CartItems);
  return itemsFromStorage ? JSON.parse(itemsFromStorage) as CartItemType[] : [];
};

const getCountFromStorage = (): number => {
  const countFromStorage = localStorage.getItem(CartStorageKey.CartTotalCount);
  return countFromStorage ? Number(JSON.parse(countFromStorage)) : 0;
};

export default function CartRestorer(): JSX.Element {
  const cartShouldInit = useSelector(getInitMark, shallowEqual);
  const cartShouldReset = useSelector(getResetMark, shallowEqual);
  //const totalCount = useSelector(getTotalCount, shallowEqual);
  //const items = useSelector(getItems, shallowEqual);
  const dispatch = useAppDispatch();

  /**
   get initial cart state from local storage
   */
  useEffect(() => {
    if (!cartShouldInit) {
      return;
    }

    dispatch(cartActions.init({
      totalCount: getCountFromStorage(),
      items: getItemsFromStorage(),
    }));
  }, [cartShouldInit, dispatch]);

  /**
   remove cart state from local storage
   */
  useEffect(() => {
    if (!cartShouldReset) {
      return;
    }

    localStorage.removeItem(CartStorageKey.CartTotalCount);
    localStorage.removeItem(CartStorageKey.CartItems);
  }, [cartShouldReset]);

  /*  const setCartToLocalStorage = () => {
    localStorage.setItem(CartStorageKey.CartTotalCount, JSON.stringify(10));
    localStorage.setItem(CartStorageKey.CartItems, JSON.stringify([{id: 1, count: 2}, {id: 2, count: 4}]));
  };

  /!* eslint-disable no-console *!/
  const getCartToLocalStorage = () => {
    const count = localStorage.getItem(CartStorageKey.CartTotalCount);
    const items = localStorage.getItem(CartStorageKey.CartItems);
    if (count) {
      console.log(JSON.parse(count));
    }
    if (items) {
      console.log(JSON.parse(items));
    }
  };

  const resetLocalStorage = () => {
    localStorage.removeItem(CartStorageKey.CartTotalCount);
    localStorage.removeItem(CartStorageKey.CartItems);
  };*/

  return <div className={'visually-hidden'}></div>;
  /*return (
    <div>
      <button onClick={setCartToLocalStorage}>set cart</button>
      <button onClick={getCartToLocalStorage}>get cart</button>
      <button onClick={resetLocalStorage}>reset cart</button>
    </div>);*/
}
