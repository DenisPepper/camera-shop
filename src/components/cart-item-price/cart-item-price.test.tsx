import CartItemPrice from './cart-item-price';
import {render, screen} from '@testing-library/react';
import {formatPrice} from '../../lib/format-price/format-price';

it('should render without fail', () => {

  const PRICE = 1000;
  const expectedText = `${formatPrice(PRICE)} ₽`;

  render(
    <CartItemPrice price={PRICE}/>
  );

  const element = screen.getByText(expectedText);
  expect(element).toBeInTheDocument();
});
