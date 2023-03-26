import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getAddItemPopupIsOpen
} from '../../store/slices/cart/selectors/get-add-item-popup-is-open/get-add-item-popup-is-open';
import {useRef} from 'react';
import {getProduct} from '../../store/slices/cart/selectors/get-product/get-product';
import CartItemImage from '../cart-item-image/cart-item-image';
import CartItemDescription from '../cart-item-description/cart-item-description';

interface CartAddItemPopupProps {
  handlePopupClose: (id: number) => void;
}

export default function CartAddItemPopup(props: CartAddItemPopupProps): JSX.Element {
  const {handlePopupClose} = props;
  const isMounted = useSelector(getAddItemPopupIsOpen, shallowEqual);
  const product = useSelector(getProduct, shallowEqual);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleCartPopupClose = () => {
    !!product && handlePopupClose(product.id);
  };

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Добавить товар в корзину'}
      handlePopupClose={handleCartPopupClose}
      defaultFocusedElement={buttonRef}
    >

      {!!product &&
        <div className="basket-item basket-item--short">
          <CartItemImage
            key={'CartItemImage'}
            name={product.name}
            previewImg={product.previewImg}
            previewImg2x={product.previewImg2x}
            previewImgWebp={product.previewImgWebp}
            previewImgWebp2x={product.previewImgWebp2x}
          />
          <CartItemDescription
            key={'CartItemDescription'}
            name={product.name}
            price={product.price}
            vendorCode={product.vendorCode}
            type={product.type}
            level={product.level}
            category={product.category}
          />
        </div>}

      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleCartPopupClose}
          ref={buttonRef}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          Добавить в корзину
        </button>
      </div>

    </AppPopup>
  );
}
