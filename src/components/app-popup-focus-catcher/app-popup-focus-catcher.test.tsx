import AppPopupFocusCatcher from './app-popup-focus-catcher';
import {render, screen} from '@testing-library/react';

describe('', () => {

  it('should render without fail', () => {
    const stubFn = jest.fn();
    render(<AppPopupFocusCatcher onFocusHandler={stubFn}/>);
    const element = screen.getByTestId('focus-catcher');
    expect(element).toBeInTheDocument();
  });

  it('should run callback fn when it focused', () => {
    const stubFn = jest.fn();
    render(<AppPopupFocusCatcher onFocusHandler={stubFn}/>);
    screen.getByTestId('focus-catcher').focus();
    expect(stubFn).toBeCalledTimes(1);
  });
});



