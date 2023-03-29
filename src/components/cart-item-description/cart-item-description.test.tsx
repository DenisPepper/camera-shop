import CartItemDescription from './cart-item-description';
import {render, screen} from '@testing-library/react';

it('should render without fail', () => {

  const NAME = 'NAME';

  render(
    <CartItemDescription
      name={NAME}
      type={''}
      vendorCode={''}
      level={''}
      category={''}
    />
  );

  const element = screen.getByText(new RegExp(NAME));
  expect(element).toBeInTheDocument();
});
