import CartFooter from './cart-footer';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import {stubProduct} from '../../mocks/stub-product';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {products: [stubProduct], discount: 0}
};
const store = mockStore(initialState);

describe('test CartFooter FC', () => {

  it('should render without fail', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartFooter/>
        </BrowserRouter>
      </Provider>
    );

    const element = screen.getByTestId('basket__summary');
    expect(element).toBeInTheDocument();
  });
});
