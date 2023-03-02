/* eslint-disable react/display-name */

import React, {forwardRef} from 'react';

interface AppPopupCloseButtonProps {
  handleButtonClick: () => void;
}

const AppPopupCloseButton = forwardRef<HTMLButtonElement, AppPopupCloseButtonProps>
((props: AppPopupCloseButtonProps, ref) => {
  const {handleButtonClick} = props;

  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={handleButtonClick}
      ref={ref}
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
});

export default AppPopupCloseButton;
