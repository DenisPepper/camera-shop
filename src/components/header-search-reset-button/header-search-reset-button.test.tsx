import HeaderSearchResetButton from './header-search-reset-button';
import {render, screen} from '@testing-library/react';

describe('test of HeaderSearchResetButton FC', () => {

  it('should render without fail', () => {
    render(<HeaderSearchResetButton/>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
