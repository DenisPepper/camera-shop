import ProductReviewCard from './product-review-card';
import {render, screen} from '@testing-library/react';
import {stubReview} from '../../mocks/stub-review';

describe('test ProductReviewCard FC', () => {

  it('should render without crushing', () => {
    render(<ProductReviewCard review={stubReview}/>);
  });

  it('should render with expected userName', () => {
    render(<ProductReviewCard review={stubReview}/>);
    const element = screen.getByText(new RegExp(stubReview.userName));
    expect(element).toBeInTheDocument();
  });
});
