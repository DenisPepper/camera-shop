import AppPopup from './app-popup';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {useRef} from 'react';

describe('test AppPopup FC', () => {
  const stubFn = jest.fn();

  it('should render without fail', () => {
    const ref = useRef<HTMLInputElement | null>(null);

    render(
      <AppPopup
        isOpen
        title={'title'}
        onPopupCloseHandler={stubFn}
        defaultFocusedElement={ref}
        isNarrow={false}
      >
        <form>
          <label>
            popup
            <input ref={ref} type="text"/>
          </label>
        </form>
      </AppPopup>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('popup');
    expect(element).toBeInTheDocument();
  });
});

