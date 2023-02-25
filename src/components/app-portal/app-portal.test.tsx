import AppPortal from './app-portal';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

describe('test AppPortal FC', () => {

  it('should render without fail', () => {
    render(<AppPortal><h1>portal</h1></AppPortal>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('portal');
    expect(element).toBeInTheDocument();
  });
});
