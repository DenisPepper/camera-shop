import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getGratefulFeedbackPopupIsOpen
} from '../../store/slices/grateful-feedback-popup/selectors/get-grateful-feedback-popup-is-open/get-grateful-feedback-popup-is-open';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {
  gratefulFeedbackPopupActions
} from '../../store/slices/grateful-feedback-popup/slice/grateful-feedback-popup-slice';
import AppPopupCloseButton from '../app-popup-close-button/app-popup-close-button';
import React, {useEffect, useRef} from 'react';

export default function GratefulFeedbackPopup(): JSX.Element {
  const isMounted = useSelector(getGratefulFeedbackPopupIsOpen, shallowEqual);
  const dispatch = useAppDispatch();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnButtonRef = useRef<HTMLButtonElement>(null);

  const handleOnPopupCloseClick = () => {
    dispatch(gratefulFeedbackPopupActions.close());
  };

  const handleOnPopupKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Tab' || evt.shiftKey) {
      evt.stopPropagation();
    }
  };

  const handleOnCloseButtonFocus = () => {
    returnButtonRef.current?.focus();
  };

  useEffect(() => {
    if (isMounted) {
      setTimeout(() => {
        returnButtonRef.current?.focus();
      }, 100);
    }
  }, [isMounted]);

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Спасибо за покупку'}
      isNarrow
      disableOnTab
      overlayOnClickHandler={handleOnPopupCloseClick}
      onEscapeKeyDownHandler={handleOnPopupCloseClick}
    >
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"/>
      </svg>
      <div
        className="modal__buttons"
        onKeyDown={handleOnPopupKeyDown}
      >
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={returnButtonRef}
          onClick={handleOnPopupCloseClick}
        >
          Вернуться к покупкам
        </button>
      </div>
      <AppPopupCloseButton
        onClickHandler={handleOnPopupCloseClick}
        onFocusHandler={handleOnCloseButtonFocus}
        ref={closeButtonRef}
      />
    </AppPopup>
  );
}
