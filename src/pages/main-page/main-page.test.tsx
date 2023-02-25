import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './main-page';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

it('should render MainPage FC', () => {
  render(<MainPage/>,
    {wrapper: BrowserRouter});
});
