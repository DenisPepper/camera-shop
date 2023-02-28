import React, {forwardRef} from 'react';

interface AppPopupCloseButtonProps {
  onClickHandler: () => void;
  onFocusHandler: () => void;
}
// eslint-disable-next-line react/display-name
const AppPopupCloseButton = forwardRef<HTMLButtonElement, AppPopupCloseButtonProps>
((props: AppPopupCloseButtonProps, ref) => {
  const {onClickHandler, onFocusHandler} = props;

  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={onClickHandler}
      onFocus={onFocusHandler}
      ref={ref}
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
});

export default AppPopupCloseButton;
