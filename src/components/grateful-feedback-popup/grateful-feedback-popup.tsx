import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getGratefulFeedbackPopupIsOpen
} from '../../store/slices/grateful-feedback-popup/selectors/get-grateful-feedback-popup-is-open/get-grateful-feedback-popup-is-open';
import React, {useRef} from 'react';

interface GratefulFeedbackPopupProps {
  onPopupCloseHandler: () => void;
}

export default function GratefulFeedbackPopup(props: GratefulFeedbackPopupProps): JSX.Element {
  const {onPopupCloseHandler} = props;
  const isMounted = useSelector(getGratefulFeedbackPopupIsOpen, shallowEqual);
  const returnButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Спасибо за покупку'}
      isNarrow
      defaultFocusedElement={returnButtonRef}
      onPopupCloseHandler={onPopupCloseHandler}
    >
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"/>
      </svg>

      <div
        className="modal__buttons"
      >
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={returnButtonRef}
          onClick={onPopupCloseHandler}
        >
          Вернуться к покупкам
        </button>
      </div>

    </AppPopup>
  );
}
