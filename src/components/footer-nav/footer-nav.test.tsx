import FooterNav from './footer-nav';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test FooterNav FC', () => {

  it('should', () => {

    render(<FooterNav/>, {wrapper: BrowserRouter});
    const nav = screen.getByTestId('footer-nav');
    expect(nav).toBeInTheDocument();
  });
});
