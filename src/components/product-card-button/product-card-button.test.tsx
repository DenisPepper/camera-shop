import ProductCardButton from './product-card-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';


describe('test ProductCardButton FC', () => {

  it('should render without crushing', () => {
    render(<ProductCardButton id={1}/>, {wrapper: BrowserRouter});
    const element = screen.getByText(/Купить/);
    expect(element).toBeInTheDocument();
  });
});
