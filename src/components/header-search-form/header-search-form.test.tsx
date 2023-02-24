import HeaderSearchForm from './header-search-form';
import {render, screen} from '@testing-library/react';

describe('test HeaderSearchForm FC', () => {

  it('should render without fail', () => {

    render(<HeaderSearchForm/>);
    const form = screen.getByText(/Сбросить поиск/);
    expect(form).toBeInTheDocument();
  });
});
