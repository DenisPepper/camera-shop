import ProductRating from './product-rating';
import {render, screen} from '@testing-library/react';

describe('test ProductRating FC', () => {

  const className = 'rate product-card__rate';
  const rating = 5;
  const totalReviewCount = 10;

  it('should render container element without crushing with expected class name', () => {
    render(
      <ProductRating
        className={className}
        rating={rating}
      />);
    const element = screen.getByTestId('rating-container');
    expect(element).toHaveClass(className);
  });

  it('should render rating element with expected text', () => {
    render(
      <ProductRating
        className={className}
        rating={rating}
      />);
    const element = screen.getByText(/Рейтинг:/);
    expect(element).toBeInTheDocument();
  });

  it('should render total reviews count element with expected text', () => {
    render(
      <ProductRating
        className={className}
        rating={rating}
        totalReviewCount={totalReviewCount}
      />);
    const element = screen.getByText(/Всего оценок:/);
    expect(element).toBeInTheDocument();
  });

  it('should render component without total reviews count element', () => {
    render(
      <ProductRating
        className={className}
        rating={rating}
      />);
    const element = screen.queryByText(/Всего оценок:/);
    expect(element).toBeNull();
  });
});
