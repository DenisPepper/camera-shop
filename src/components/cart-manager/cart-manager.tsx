import {useLayoutEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalCount} from '../../store/slices/cart/selectors/get-total-count/get-total-count';
import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {CartItemType} from '../../types/cart-types';
import CartAddItemPopup from '../cart-add-item-popup/cart-add-item-popup';
import CartSuccessAddedPopup from '../cart-success-added-popup/cart-success-added-popup';
import {useLocation, useNavigate} from 'react-router-dom';
import {DEFAULT_PAGE_NUMBER, Path, Path as to} from '../../settings/settings';

const CartStorageKey = {
  TotalCount: 'CART_TOTAL_COUNT',
  Items: 'CART_ITEMS'
} as const;

export default function CartManager(): JSX.Element {
  const totalCount = useSelector(getTotalCount, shallowEqual);
  const items = useSelector(getItems, shallowEqual);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAddItemPopupClose = (id: number) => {
    dispatch(cartActions.addItem(id));
    dispatch(cartActions.closeAddItemPopup());
    dispatch(cartActions.openSuccessAddedItemPopup());
  };

  const handleSuccessAddedPopupClose = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
  };

  const handleContinueButtonClick = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
    if (location.pathname.indexOf(Path.Catalog) === -1) {
      navigate(`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`);
    }
  };

  const handleNavigateToCartClick = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
    navigate(Path.Cart);
  };

  return (
    <>
      <CartAddItemPopup
        key={'CartAddItemPopup'}
        handlePopupClose={handleAddItemPopupClose}
      />
      <CartSuccessAddedPopup
        key={'CartSuccessAddedPopup'}
        handlePopupClose={handleSuccessAddedPopupClose}
        handleContinueButtonClick={handleContinueButtonClick}
        handleNavigateToCartClick={handleNavigateToCartClick}
      />
    </>
  );
}

//TODO при отправке заказа ключи корзины нужно удалить и перевести состояние корзины в редьюсере enabled:false
