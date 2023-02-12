import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {reviewPopupActions} from '../../store/slices/review-popup/slice/review-popup-slice';
import {
  getReviewPopupIsOpen
} from '../../store/slices/review-popup/selectors/get-review-popup-is-open/get-review-popup-is-open';

export default function PostReviewPopup(): JSX.Element {
  const dispatch = useAppDispatch();
  const isMounted = useSelector(getReviewPopupIsOpen, shallowEqual);

  const handleOnCloseClick = () => {
    dispatch(reviewPopupActions.close());
  };

  return (
    <AppPopup
      isOpen={isMounted}
      overlayOnClickHandler={handleOnCloseClick}
      onEscapeKeyDownHandler={handleOnCloseClick}
    >
      <p className="title title--h4">Оставить отзыв</p>

      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={handleOnCloseClick}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </AppPopup>
  );
}
