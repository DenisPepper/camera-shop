import ProductCartLink from './product-cart-link';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

it('should render without fail', () => {

  render(
    <BrowserRouter>
      <ProductCartLink/>
    </BrowserRouter>
  );

  const element = screen.getByRole('link');
  expect(element).toBeInTheDocument();
});
