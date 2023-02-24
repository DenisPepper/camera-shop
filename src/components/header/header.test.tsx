import Header from './header';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('test Header FC', () => {

  it('should render without fail', () => {

    render(<Header/>, {wrapper: BrowserRouter});
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
  });
});
