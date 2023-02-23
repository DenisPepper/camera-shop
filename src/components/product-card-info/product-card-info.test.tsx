import ProductCardInfo from './product-card-info';
import {render} from '@testing-library/react';

describe('test ProductCardInfo FC', () => {

  it('should render without crushing', () => {
    render(
      <ProductCardInfo
        name={'name'}
        rating={3}
        price={1000}
        reviewCount={10}
      />);
  });
});
