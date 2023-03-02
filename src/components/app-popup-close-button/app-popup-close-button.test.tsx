import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppPopupCloseButton from './app-popup-close-button';
import {BrowserRouter} from 'react-router-dom';


describe('test AppPopupCloseButton FC', () => {

  const handleButtonClick = jest.fn();

  it('should render without fail', async () => {
    render(
      <AppPopupCloseButton handleButtonClick={handleButtonClick}/>,
      {wrapper: BrowserRouter}
    );
    const element = await screen.findByRole('button');
    await userEvent.click(element);
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});
