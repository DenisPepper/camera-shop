import {render, screen,} from '@testing-library/react';
import {BrowserRouter,} from 'react-router-dom';
import CartPage from './cart-page';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {
    items: [],
    totalCount: 0,
    products: [],
    coupon: '',
    discount: 0,
    discountIsLoading: false,
    discountResponseStatus: '',
  }
};
const store = mockStore(initialState);

it('should render NotFoundPage FC with expected text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartPage/>
      </BrowserRouter>
    </Provider>
  );
  const text = screen.getByText(/Корзина/);
  expect(text).toBeInTheDocument();
});
