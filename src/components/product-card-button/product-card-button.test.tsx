import ProductCardButton from './product-card-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {stubProduct} from '../../mocks/stub-product';

describe('test ProductCardButton FC', () => {

  it('should render without crushing', () => {
    render(<ProductCardButton product={stubProduct}/>, {wrapper: BrowserRouter});
    const element = screen.getByText(/Купить/);
    expect(element).toBeInTheDocument();
  });
});
