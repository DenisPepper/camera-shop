import AppPopup from './app-popup';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test AppPopup FC', () => {
  const handlePopupClose = jest.fn();

  it('should render without fail', () => {

    render(
      <AppPopup
        isOpen
        title={'title'}
        handlePopupClose={handlePopupClose}
        isNarrow={false}
      >
        <form>
          <label>
            popup
            <input type="text"/>
          </label>
        </form>
      </AppPopup>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('popup');
    expect(element).toBeInTheDocument();
  });
});

