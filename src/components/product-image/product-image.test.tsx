import ProductImage from './product-image';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

it('should render without fail', () => {

  render(
    <BrowserRouter>
      <ProductImage
        name={''}
        width={''}
        height={''}
        previewImg={''}
        previewImg2x={''}
        previewImgWebp={''}
        previewImgWebp2x={''}
      />
    </BrowserRouter>
  );

  const element = screen.getByRole('img');
  expect(element).toBeInTheDocument();
});
