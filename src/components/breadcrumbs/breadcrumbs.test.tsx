import Breadcrumbs from './breadcrumbs';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

describe('test BreadcrumbsItem FC', () => {

  it('should render without fail', () => {
    render(<Breadcrumbs/>,
      {wrapper: BrowserRouter});
    const element = screen.getByTestId('breadcrumbs');
    expect(element).toBeInTheDocument();
  });
});
