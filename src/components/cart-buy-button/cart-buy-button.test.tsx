import CartBuyButton from './cart-buy-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {stubProduct} from '../../mocks/stub-product';
import {Provider} from 'react-redux';
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

describe('should render without fail', () => {

  it('should render with expected text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartBuyButton
            product={stubProduct}
          />
        </BrowserRouter>
      </Provider>
    );

    const element = screen.getByText(/Добавить в корзину/);
    expect(element).toBeInTheDocument();
  });

  it('should render with expected text with expected value prop', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartBuyButton
            product={stubProduct}
            isProductCard
          />
        </BrowserRouter>
      </Provider>
    );

    const element = screen.getByText(/Купить/);
    expect(element).toBeInTheDocument();
  });

});

