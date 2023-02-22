import {render, screen,} from '@testing-library/react';
import {BrowserRouter,} from 'react-router-dom';
import ProductListPage from './product-list-page';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

it('should render ProductListPage FC with expected text', () => {
  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore()}>
      <BrowserRouter>
        <ProductListPage/>
      </BrowserRouter>
    </Provider>);
  const pageTitle = screen.getByText(/Каталог фото- и видеотехники/);
  expect(pageTitle).toBeInTheDocument();
});
