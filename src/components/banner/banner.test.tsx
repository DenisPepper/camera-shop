import Banner from './banner';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('test Banner FC', () => {

  it('should render without fail', () => {
    render(<Banner/>,
      {wrapper: BrowserRouter});
    const element = screen.getByTestId('banner');
    expect(element).toBeInTheDocument();
  });
});
