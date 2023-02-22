import {render, screen,} from '@testing-library/react';
import {BrowserRouter, } from 'react-router-dom';
import CartPage from './cart-page';

it('should render NotFoundPage FC with expected text', () => {
  render(<CartPage/>, {wrapper: BrowserRouter});
  const text = screen.getByText(/Корзина/);
  expect(text).toBeInTheDocument();
});
