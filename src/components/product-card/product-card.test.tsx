import ProductCard from './product-card';
import {render} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';
import {BrowserRouter} from 'react-router-dom';

describe('test ProductCard FC', () => {

  it('should render without crushing', () => {
    render(
      <ProductCard product={stubProduct}/>,
      {wrapper: BrowserRouter});
  });
});
