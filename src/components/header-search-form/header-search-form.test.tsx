import HeaderSearchForm from './header-search-form';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test HeaderSearchForm FC', () => {

  it('should render without fail', () => {

    render(<HeaderSearchForm/>, {wrapper: BrowserRouter});
    const form = screen.getByTestId(/form-search/);
    expect(form).toBeInTheDocument();
  });
});
