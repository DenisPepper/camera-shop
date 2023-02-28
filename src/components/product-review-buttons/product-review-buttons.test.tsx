import ProductReviewButtons from './product-review-buttons';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('test ProductReviewButtons FC', () => {
  const stubCallback = jest.fn();

  it('should render without crushing', () => {
    render(
      <ProductReviewButtons
        onShowMoreClickHandler={stubCallback}
        shouldHide
      />);
    const element = screen.getByText(/Показать больше отзывов/);
    expect(element).toBeInTheDocument();
  });

  it('should run callback function', async () => {
    render(
      <ProductReviewButtons
        onShowMoreClickHandler={stubCallback}
        shouldHide
      />);
    const element = screen.getByRole('button');
    await userEvent.click(element);
    expect(stubCallback).toHaveBeenCalledTimes(1);
  });

  it('should render with expected scc class', () => {
    render(
      <ProductReviewButtons
        onShowMoreClickHandler={stubCallback}
        shouldHide
      />);
    const element = screen.getByTestId('button-container');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('visually-hidden');
  });

});
