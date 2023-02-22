import {render, screen,} from '@testing-library/react';
import {BrowserRouter, } from 'react-router-dom';
import NotFoundPage from 'pages/not-found-page/not-found-page';

it('should render NotFoundPage FC with expected text', () => {
  render(<NotFoundPage/>, {wrapper: BrowserRouter});
  const text = screen.getByText(/Перейти на главную страницу/);
  expect(text).toBeInTheDocument();
});
