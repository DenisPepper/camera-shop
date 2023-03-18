import HeaderSearchItem from './header-search-item';
import {render, screen} from '@testing-library/react';

describe('test of HeaderSearchItem FC', () => {

  const id = 1;
  const name = 'search item name';

  it('should render without fail', () => {
    render(<HeaderSearchItem id={id} name={name}/>);
    const element = screen.getByText(new RegExp(name));
    expect(element).toBeInTheDocument();
  });
});
