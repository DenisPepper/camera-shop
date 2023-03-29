import CartItemImage from './cart-item-image';
import {render, screen} from '@testing-library/react';

it('should render without fail', () => {

  render(
    <CartItemImage
      name={''}
      previewImg={''}
      previewImg2x={''}
      previewImgWebp={''}
      previewImgWebp2x={''}
    />
  );

  const element = screen.getByTestId(/basket-item__img/);
  expect(element).toBeInTheDocument();
});
