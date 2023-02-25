import AppRatingInput from './app-rating-input';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

describe('test AppRatingInput FC', () => {

  it('should render without fail', () => {
    render(<AppRatingInput title={'title'}><input/></AppRatingInput>,
      {wrapper: BrowserRouter});
    const element = screen.getByTestId('rating-input');
    expect(element).toBeInTheDocument();
  });
});
