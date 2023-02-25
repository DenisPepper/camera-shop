import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import CatalogPage from './catalog-page';


describe('test CatalogPage FC', () => {

  it('should render without fail', () => {
    render(<CatalogPage/>,
      {wrapper: BrowserRouter});
  });
});
