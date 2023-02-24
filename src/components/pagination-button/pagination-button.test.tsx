import PaginationButton from './pagination-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test PaginationButton FC', () => {
  const stubPage = 2;
  const stubCurrentPage = 2;

  it('render without fails with expected css class', () => {
    render(
      <PaginationButton
        page={stubPage}
        currentPage={stubCurrentPage}
      />, {wrapper: BrowserRouter});
    const button = screen.getByText(new RegExp(stubPage.toString()));
    expect(button).toHaveClass('pagination__link--active');
  });
});
