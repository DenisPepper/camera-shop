import ProductCardImage from './product-card-image';
import {render} from '@testing-library/react';

describe('test ProductCardImage FC', () => {

  it('render without crushing', () => {
    render(
      <ProductCardImage
        name={'name'}
        previewImg={'img'}
        previewImg2x={'img'}
        previewImgWebp={'img'}
        previewImgWebp2x={'img'}
      />
    );
  });
});
