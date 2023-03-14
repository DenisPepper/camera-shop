import {render} from '@testing-library/react';
import {App} from './app';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {DeepPartial} from '@reduxjs/toolkit';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  promo: {isLoaded: false, product: null},
  searchParams: {sort: '', order: '', minPrice: '', maxPrice: ''},
};
const store = mockStore(initialState);

it('should render without crushing', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
});
