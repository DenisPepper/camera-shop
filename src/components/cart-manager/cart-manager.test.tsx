import CartManager from './cart-manager';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {}
};
const store = mockStore(initialState);

describe('test CartManager FC', () => {

  it('should render without fail', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartManager/>
        </BrowserRouter>
      </Provider>
    );
  });
});

