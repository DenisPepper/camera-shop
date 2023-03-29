import CartAmount from './cart-amount';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {stubCartProduct} from '../../mocks/stub-cart-product';
import {formatPrice} from '../../lib/format-price/format-price';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {successPostedOrderPopupIsOpen: true}
};
const store = mockStore(initialState);

it('should render without fail with expected amount value', () => {

  const price = 1000;
  const count = 2;
  const discount = 15;
  const totalAmount = formatPrice((price * count) * (100 - 15) / 100);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartAmount
          products={[{...stubCartProduct, price, count}]}
          discount={discount}
        />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.getByText(new RegExp(totalAmount));
  expect(element).toBeInTheDocument();
});
