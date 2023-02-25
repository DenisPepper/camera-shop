import AppLayout from './app-layout';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('test AppLayout FC', () => {

  it('should render without fail', () => {
    render(<AppLayout/>,
      {wrapper: BrowserRouter});
    const element = screen.getByTestId('app-layout');
    expect(element).toBeInTheDocument();
  });
});
