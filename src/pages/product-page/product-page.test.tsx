import ProductPage from './product-page';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

it.todo('should render ProductPage FC', () => {
  render(<ProductPage/>, {wrapper: BrowserRouter});
});
