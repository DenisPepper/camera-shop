import AppTextInput from './app-text-input';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

describe('test AppTextInput FC', () => {

  it('should render without fail', () => {
    render(<AppTextInput title={'title'}><input/></AppTextInput>,
      {wrapper: BrowserRouter});
    const element = screen.getByText('title');
    expect(element).toBeInTheDocument();
  });
});
