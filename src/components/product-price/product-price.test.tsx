import ProductPrice from './product-price';
import {render, screen} from '@testing-library/react';

describe('test ProductPrice FC', () => {
  const className = 'product-card__price';
  const price = 1000;

  it('should render without crushing', () => {
    render(<ProductPrice className={className} price={price}/>);
    const element = screen.getByText(/₽/);
    expect(element).toBeInTheDocument();
  });

  it('should render container element with expected class name', () => {
    render(<ProductPrice className={className} price={price}/>);
    const element = screen.getByTestId('product-price-container');
    expect(element).toHaveClass(className);
  });

  it('should render element with expected text', () => {
    render(<ProductPrice className={className} price={price}/>);
    const element = screen.getByText(/Цена:/);
    expect(element).toBeInTheDocument();
  });
});
