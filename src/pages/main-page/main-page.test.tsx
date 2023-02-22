import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './main-page';

it.todo('should render MainPage FC', () => {
  render(<MainPage/>, {wrapper: BrowserRouter});
});
