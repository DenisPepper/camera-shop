import AppPopup from './app-popup';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test AppPopup FC', () => {
  const overlayOnClickHandler = jest.fn();
  const onEscapeKeyDownHandler = jest.fn();

  it('should render without fail', () => {
    render(
      <AppPopup
        isOpen
        title={'title'}
        overlayOnClickHandler={overlayOnClickHandler}
        onEscapeKeyDownHandler={onEscapeKeyDownHandler}
      >
        <h1>popup</h1>
      </AppPopup>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('popup');
    expect(element).toBeInTheDocument();
  });
});

