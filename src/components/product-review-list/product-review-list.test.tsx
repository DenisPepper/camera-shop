import ProductReviewList from './product-review-list';
import {render, screen} from '@testing-library/react';
import {stubReview} from '../../mocks/stub-review';
import { logRoles } from '@testing-library/react';

describe('test ProductReviewList FC', () => {

  it('should render without crushing with filled array', () => {
    render(<ProductReviewList reviews={[stubReview]}/>);
  });

  it('should render empty ul list with expected css class', () => {
    const { container } = render(<ProductReviewList reviews={[]}/>);
    logRoles(container);
    const element = screen.getByRole('list');
    expect(element).toHaveClass('review-block__list');
  });
});
