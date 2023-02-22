import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import CatalogPage from './catalog-page';

it.todo('should render CatalogPage FC', () => {
  render(<CatalogPage/>, {wrapper: BrowserRouter});
});
