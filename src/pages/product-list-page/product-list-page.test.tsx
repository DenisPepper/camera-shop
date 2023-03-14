import {render, screen,} from '@testing-library/react';
import {BrowserRouter,} from 'react-router-dom';
import ProductListPage from './product-list-page';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  searchParams: {sort: '', order: '', priceLte: '', priceGte: ''}
};
const store = mockStore(initialState);

it('should render ProductListPage FC with expected text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductListPage/>
      </BrowserRouter>
    </Provider>);
  const pageTitle = screen.getByText(/Каталог фото- и видеотехники/);
  expect(pageTitle).toBeInTheDocument();
});
