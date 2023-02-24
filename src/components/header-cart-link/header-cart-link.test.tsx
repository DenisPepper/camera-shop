import HeaderCartLink from './header-cart-link';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test HeaderCartLink FC', () => {

  it('should render without fail', () => {

    render(<HeaderCartLink/>, {wrapper: BrowserRouter});
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
