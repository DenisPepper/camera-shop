import AppLayout from './app-layout';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test AppLayout FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    promo: {isLoaded: false, product: null},
    searchParams: {
      sort: '',
      order: '',
      minPrice: '',
      maxPrice: '',
      levels: [],
      category: '',
      groups: [],
      bannedGroups: []
    },
    error: {errors: []},
    product: {product: null, isProductLoading: false, products: [], isLoading: false, totalPagesCount: 0}
  };
  const store = mockStore(initialState);

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout/>,
        </BrowserRouter>
      </Provider>);
    const element = screen.getByTestId('app-layout');
    expect(element).toBeInTheDocument();
  });
});
