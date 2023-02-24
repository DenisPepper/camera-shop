import Pagination from './pagination';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test Pagination FC', () => {
  const stubCurrentPage = 2;
  const stubPageNumbers = [1, 2, 3];
  const totalPagesCount = 3;

  it('should render with three pages where current page is 2', () => {

    render(
      <Pagination
        currentPage={stubCurrentPage}
        totalPagesCount={totalPagesCount}
        pageNumbers={stubPageNumbers}
      />, {wrapper: BrowserRouter});

    const backwardButton = screen.getByText(/Назад/);
    const forwardButton = screen.getByText(/Далее/);
    const activeButton = screen.getByRole('link', {name: stubCurrentPage.toString()});

    expect(backwardButton).toBeInTheDocument();
    expect(forwardButton).toBeInTheDocument();
    expect(activeButton).toHaveClass('pagination__link--active');
  });
});
