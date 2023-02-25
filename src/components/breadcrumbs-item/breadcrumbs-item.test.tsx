import BreadcrumbsItem from './breadcrumbs-item';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test BreadcrumbsItem FC', () => {

  it('should render without fail', () => {

    render(<BreadcrumbsItem path={'catalog'} notLast/>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('Каталог');
    expect(element).toBeInTheDocument();
  });
});
