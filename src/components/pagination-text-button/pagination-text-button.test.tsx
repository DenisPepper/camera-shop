import PaginationTextButton from './pagination-text-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test PaginationTextButton FC', () => {
  const stubText = 'Назад';
  const stubPage = 1;

  it('should render without fails', () => {
    render(
      <PaginationTextButton
        currentPage={stubPage}
        text={stubText}
      />,
      {wrapper: BrowserRouter}
    );
    const button = screen.getByText(stubText);
    expect(button).toBeInTheDocument();
  });
});
