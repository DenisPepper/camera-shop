interface AppPopupFocusSwitcherProps {
  onFocusHandler: () => void;
}

export default function AppPopupFocusCatcher(props: AppPopupFocusSwitcherProps): JSX.Element {
  const {onFocusHandler} = props;
  return (
    <button
      className={'visually-hidden'}
      aria-hidden={'true'}
      onFocus={onFocusHandler}
      data-testid={'focus-catcher'}
    />
  );
}
