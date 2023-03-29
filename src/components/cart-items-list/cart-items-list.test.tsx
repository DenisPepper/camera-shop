import CartItemsList from './cart-items-list';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {stubCartItem} from '../../mocks/stub-cart-item';
import {stubCartProduct} from '../../mocks/stub-cart-product';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);

describe('test CartItemsList FC', () => {

  it('should render null', () => {

    const initialState: DeepPartial<StateSchema> = {
      cart: {items: [], products: []}
    };
    const store = mockStore(initialState);

    const {container} = render(
      <Provider store={store}>
        <BrowserRouter>
          <CartItemsList/>
        </BrowserRouter>
      </Provider>
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should render list element', () => {

    const initialState: DeepPartial<StateSchema> = {
      cart: {items: [stubCartItem], products: [stubCartProduct]}
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartItemsList/>
        </BrowserRouter>
      </Provider>
    );

    const element = screen.getAllByRole('list');
    expect(element.shift()).toBeInTheDocument();

  });
});


