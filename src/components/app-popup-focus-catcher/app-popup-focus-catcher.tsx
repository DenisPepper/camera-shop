interface AppPopupFocusSwitcherProps {
  handleCatcherFocus: () => void;
}

export default function AppPopupFocusCatcher(props: AppPopupFocusSwitcherProps): JSX.Element {
  const {handleCatcherFocus} = props;
  return (
    <button
      className={'visually-hidden'}
      aria-hidden={'true'}
      onFocus={handleCatcherFocus}
      data-testid={'focus-catcher'}
    />
  );
}
