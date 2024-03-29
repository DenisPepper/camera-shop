import {useEffect, useLayoutEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalCount} from '../../store/slices/cart/selectors/get-total-count/get-total-count';
import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {CartItemType} from '../../types/cart-types';
import CartAddItemPopup from '../cart-add-item-popup/cart-add-item-popup';
import CartSuccessAddedPopup from '../cart-success-added-popup/cart-success-added-popup';
import {useLocation, useNavigate} from 'react-router-dom';
import {DEFAULT_PAGE_NUMBER, Path as to} from '../../settings/settings';
import {getCartIsDisabled} from '../../store/slices/cart/selectors/get-cart-is-disabled/get-cart-is-disabled';
import CartRemoveItemPopup from '../cart-remove-item-popup/cart-remove-item-popup';
import {getDiscount} from '../../store/slices/cart/selectors/get-discount/get-discount';
import {getCoupon} from '../../store/slices/cart/selectors/get-coupon/get-coupon';
import CartSuccessPostedOrderPopup from '../cart-success-posted-order-popup/cart-success-posted-order-popup';

const CartStorageKey = {
  TotalCount: 'CART_TOTAL_COUNT',
  Items: 'CART_ITEMS',
  Discount: 'DISCOUNT',
  Coupon: 'COUPON',
} as const;

export default function CartManager(): JSX.Element {
  const totalCount = useSelector(getTotalCount, shallowEqual);
  const items = useSelector(getItems, shallowEqual);
  const isCartDisabled = useSelector(getCartIsDisabled, shallowEqual);
  const discount = useSelector(getDiscount, shallowEqual);
  const coupon = useSelector(getCoupon, shallowEqual);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  /**
   get initial cart state from local storage
   */
  useLayoutEffect(() => {
    const countFromStorage = localStorage.getItem(CartStorageKey.TotalCount);
    const itemsFromStorage = localStorage.getItem(CartStorageKey.Items);
    const discountFromStorage = localStorage.getItem(CartStorageKey.Discount);
    const couponFromStorage = localStorage.getItem(CartStorageKey.Coupon);
    if (countFromStorage && itemsFromStorage && discountFromStorage && couponFromStorage) {
      dispatch(cartActions.init({
        totalCount: JSON.parse(countFromStorage) as number,
        items: JSON.parse(itemsFromStorage) as CartItemType[],
        discount: JSON.parse(discountFromStorage) as number,
        coupon: JSON.parse(couponFromStorage) as string,
      }));
    }
  }, []);

  /**
   set cart items to local storage
   */
  useLayoutEffect(() => {
    if (isCartDisabled) {
      return;
    }
    localStorage.setItem(CartStorageKey.Items, JSON.stringify(items));
  }, [items, isCartDisabled]);

  /**
   set cart total count to local storage
   */
  useLayoutEffect(() => {
    if (isCartDisabled) {
      return;
    }
    localStorage.setItem(CartStorageKey.TotalCount, JSON.stringify(totalCount));
  }, [totalCount, isCartDisabled]);

  /**
   set discount to local storage
   */
  useLayoutEffect(() => {
    if (isCartDisabled) {
      return;
    }
    localStorage.setItem(CartStorageKey.Discount, JSON.stringify(discount));
  }, [discount, isCartDisabled]);

  /**
   set coupon to local storage
   */
  useLayoutEffect(() => {
    if (isCartDisabled) {
      return;
    }
    localStorage.setItem(CartStorageKey.Coupon, JSON.stringify(coupon));
  }, [coupon, isCartDisabled]);

  /**
   enable cart for layout effects
   */
  useEffect(() => {
    dispatch(cartActions.enable());
  }, []);

  const handleAddItemPopupAdd = (id: number) => {
    dispatch(cartActions.addItem(id));
    dispatch(cartActions.closeAddItemPopup());
    dispatch(cartActions.openSuccessAddedItemPopup());
  };

  const handleAddItemPopupClose = () => {
    dispatch(cartActions.closeAddItemPopup());
  };

  const handleSuccessAddedPopupClose = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
  };

  const handleContinueButtonClick = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
    if (location.pathname.indexOf(to.Catalog) === -1) {
      navigate(`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`);
    }
  };

  const handleNavigateToCartClick = () => {
    dispatch(cartActions.closeSuccessAddedItemPopup());
    navigate(to.Cart);
  };

  const handleRemoveItemPopupClose = () => {
    dispatch(cartActions.closeRemoveItemPopup());
  };

  const handleRemoveClick = (id: number) => {
    dispatch(cartActions.removeItem(id));
    dispatch(cartActions.closeRemoveItemPopup());
  };

  const handleAfterSuccessClose = () => {
    dispatch(cartActions.closeSuccessPostedOrderPopup());
    dispatch(cartActions.clearCart());
  };

  const handleAfterSuccessContinue = () => {
    dispatch(cartActions.closeSuccessPostedOrderPopup());
    navigate(`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`);
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <CartAddItemPopup
        key={'CartAddItemPopup'}
        handlePopupAdd={handleAddItemPopupAdd}
        handlePopupClose={handleAddItemPopupClose}
      />
      <CartSuccessAddedPopup
        key={'CartSuccessAddedPopup'}
        handlePopupClose={handleSuccessAddedPopupClose}
        handleContinueButtonClick={handleContinueButtonClick}
        handleNavigateToCartClick={handleNavigateToCartClick}
      />
      <CartRemoveItemPopup
        key={'CartRemoveItemPopup'}
        handlePopupClose={handleRemoveItemPopupClose}
        handlePopupRemoveItem={handleRemoveClick}
      />
      <CartSuccessPostedOrderPopup
        handlePopupClose={handleAfterSuccessClose}
        handleContinueButtonClick={handleAfterSuccessContinue}
      />
    </>
  );
}
