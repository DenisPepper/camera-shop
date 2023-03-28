import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getSuccessPostedOrderPopupIsOpen
} from '../../store/slices/cart/selectors/get-success-posted-order-popup-is-open/get-success-posted-order-popup-is-open';
import {useRef} from 'react';

interface CartSuccessPostedOrderPopupProps {
  handlePopupClose: () => void;
  handleContinueButtonClick: () => void;
}

export default function CartSuccessPostedOrderPopup(props: CartSuccessPostedOrderPopupProps): JSX.Element {
  const {handlePopupClose, handleContinueButtonClick} = props;
  const isMounted = useSelector(getSuccessPostedOrderPopupIsOpen, shallowEqual);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AppPopup
      isOpen={isMounted}
      isNarrow
      title={'Спасибо за покупку'}
      handlePopupClose={handlePopupClose}
      defaultFocusedElement={buttonRef}
    >
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>

      <div className="modal__buttons">
        <button
          ref={buttonRef}
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleContinueButtonClick}
        >
          Вернуться к покупкам
        </button>
      </div>
    </AppPopup>
  );
}
