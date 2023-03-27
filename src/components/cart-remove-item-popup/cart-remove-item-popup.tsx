import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getRemoveItemPopupIsOpen
} from '../../store/slices/cart/selectors/get-remove-item-popup-is-open/get-remove-item-popup-is-open';
import CartItemImage from '../cart-item-image/cart-item-image';
import CartItemDescription from '../cart-item-description/cart-item-description';
import {getProduct} from '../../store/slices/cart/selectors/get-product/get-product';
import {useRef} from 'react';

interface CartRemovePopupProps {
  handlePopupClose: () => void;
  handlePopupRemoveItem: (id: number) => void;
}

export default function CartRemoveItemPopup(props: CartRemovePopupProps): JSX.Element {
  const {handlePopupRemoveItem, handlePopupClose} = props;
  const isMounted = useSelector(getRemoveItemPopupIsOpen, shallowEqual);
  const product = useSelector(getProduct, shallowEqual);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleRemoveButtonClick = () => {
    !!product && handlePopupRemoveItem(product.id);
  };

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Удалить этот товар?'}
      handlePopupClose={handlePopupClose}
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
          ref={buttonRef}
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
          onClick={handleRemoveButtonClick}
        >
          Удалить
        </button>
        <button
          className="btn btn--transparent modal__btn modal__btn--half-width"
          onClick={handlePopupClose}
        >
          Продолжить покупки
        </button>
      </div>

    </AppPopup>
  );
}
