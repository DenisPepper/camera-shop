import AppTextarea from './app-textarea';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

describe('test AppTextarea FC', () => {

  it('should render without fail', () => {
    render(<AppTextarea title={'title'}><input/></AppTextarea>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('title');
    expect(element).toBeInTheDocument();
  });
});

