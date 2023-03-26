import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getSuccessAddedPopupIsOpen
} from '../../store/slices/cart/selectors/get-success-added-popup-is-open/get-success-added-popup-is-open';
import {useRef} from 'react';

interface CartSuccessAddedPopupProps {
  handlePopupClose: () => void;
  handleContinueButtonClick: () => void;
  handleNavigateToCartClick: () => void;
}

export default function CartSuccessAddedPopup(props: CartSuccessAddedPopupProps): JSX.Element {
  const {handlePopupClose, handleContinueButtonClick, handleNavigateToCartClick} = props;
  const isMounted = useSelector(getSuccessAddedPopupIsOpen, shallowEqual);
  const returnButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Товар успешно добавлен в корзину'}
      isNarrow
      defaultFocusedElement={returnButtonRef}
      handlePopupClose={handlePopupClose}
    >

      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>

      <div className="modal__buttons">

        <button
          className="btn btn--transparent modal__btn"
          onClick={handleContinueButtonClick}
        >
          Продолжить покупки
        </button>

        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          ref={returnButtonRef}
          onClick={handleNavigateToCartClick}
        >
          Перейти в корзину
        </button>

      </div>

    </AppPopup>
  );
}
