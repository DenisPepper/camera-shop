import Footer from './footer';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test Footer FC', () => {

  it('should render without fail', () => {
    render(<Footer/>, {wrapper: BrowserRouter});
    const element = screen.getByRole('contentinfo');
    expect(element).toBeInTheDocument();
  });
});
