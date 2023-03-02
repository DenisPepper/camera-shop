import ProductReviewHeader from './product-review-header';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('test ProductReviewHeader FC', () => {

  const stubCallback = jest.fn();

  it('should render without crushing', () => {
    render(<ProductReviewHeader handlePostReviewClick={stubCallback}/>);
    const element = screen.getByText(/Оставить свой отзыв/);
    expect(element).toBeInTheDocument();
  });

  it('should run callback function', async () => {
    render(<ProductReviewHeader handlePostReviewClick={stubCallback}/>);
    const element = screen.getByText(/Оставить свой отзыв/);
    await userEvent.click(element);
    expect(stubCallback).toHaveBeenCalledTimes(1);
  });

});
