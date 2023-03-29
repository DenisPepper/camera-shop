import CartPromo from './cart-promo';
import {render, screen} from '@testing-library/react';
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

it('should render without fail', () => {

  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartPromo/>
      </BrowserRouter>
    </Provider>
  );

  const element = screen.getByText(/Если у вас есть промокод на скидку, примените его в этом поле/);
  expect(element).toBeInTheDocument();
});
