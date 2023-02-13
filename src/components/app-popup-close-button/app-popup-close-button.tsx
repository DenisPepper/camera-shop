interface AppPopupCloseButtonProps {
  handleOnClick: () => void;
}

export default function AppPopupCloseButton(props: AppPopupCloseButtonProps): JSX.Element {
  const {handleOnClick} = props;

  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={handleOnClick}
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
}
