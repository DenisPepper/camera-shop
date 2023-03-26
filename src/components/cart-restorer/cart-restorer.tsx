import {useLayoutEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalCount} from '../../store/slices/cart/selectors/get-total-count/get-total-count';
import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {CartItemType} from '../../types/cart-types';

const CartStorageKey = {
  TotalCount: 'CART_TOTAL_COUNT',
  Items: 'CART_ITEMS'
} as const;

export default function CartRestorer(): JSX.Element {
  const totalCount = useSelector(getTotalCount, shallowEqual);
  const items = useSelector(getItems, shallowEqual);
  const dispatch = useAppDispatch();

  /**
   get initial cart state from local storage
   */
  useLayoutEffect(() => {
    const countFromStorage = localStorage.getItem(CartStorageKey.TotalCount);
    const itemsFromStorage = localStorage.getItem(CartStorageKey.Items);
    if (countFromStorage && itemsFromStorage) {
      dispatch(cartActions.init({
        totalCount: JSON.parse(countFromStorage) as number,
        items: JSON.parse(itemsFromStorage) as CartItemType[],
      }));
    }
  }, []);

  /**
   set cart items to local storage
   */
  useLayoutEffect(() => {
    localStorage.setItem(CartStorageKey.Items, JSON.stringify(items));
  }, [items]);

  /**
   set cart total count to local storage
   */
  useLayoutEffect(() => {
    localStorage.setItem(CartStorageKey.TotalCount, JSON.stringify(totalCount));
  }, [totalCount]);

  return <div className={'visually-hidden'}></div>;
}

//TODO при отправке заказа ключи корзины нужно удалить и перевести состояние корзины в редьюсере enabled:false
