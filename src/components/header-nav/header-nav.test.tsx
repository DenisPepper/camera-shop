import HeaderNav from './header-nav';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test HeaderNav FC', () => {

  it('render without fail', () => {
    render(<HeaderNav/>, {wrapper: BrowserRouter});
    const nav = screen.getByTestId('nav');
    expect(nav).toBeInTheDocument();
  });
});
