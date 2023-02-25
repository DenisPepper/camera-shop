import ProductPage from './product-page';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

it('should render ProductPage FC without fail', () => {

  render(<ProductPage/>,
    {wrapper: BrowserRouter});
});
