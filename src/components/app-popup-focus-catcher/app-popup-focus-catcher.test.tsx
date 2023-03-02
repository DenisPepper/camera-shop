import AppPopupFocusCatcher from './app-popup-focus-catcher';
import {render, screen} from '@testing-library/react';

describe('test AppPopupFocusCatcher', () => {
  const handleCatcherFocus = jest.fn();

  it('should render without fail', () => {
    render(<AppPopupFocusCatcher handleCatcherFocus={handleCatcherFocus}/>);
    const element = screen.getByTestId('focus-catcher');
    expect(element).toBeInTheDocument();
  });

  it('should run callback fn when it focused', () => {
    render(<AppPopupFocusCatcher handleCatcherFocus={handleCatcherFocus}/>);
    screen.getByTestId('focus-catcher').focus();
    expect(handleCatcherFocus).toBeCalledTimes(1);
  });
});
