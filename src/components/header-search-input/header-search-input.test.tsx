import HeaderSearchInput from './header-search-input';
import {render, screen} from '@testing-library/react';

describe('test of HeaderSearchInput FC', () => {

  const handleFormInput = jest.fn();

  it('should render without fail', () => {
    render(<HeaderSearchInput handleFormInput={handleFormInput}/>);
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });
});
