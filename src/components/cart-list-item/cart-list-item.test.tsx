import CartListItem from './cart-list-item';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {stubCartProduct} from '../../mocks/stub-cart-product';
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
      <CartListItem product={stubCartProduct}/>
    </Provider>
  );

  const elements = screen.getAllByRole('listitem');
  expect(elements.shift()).toBeInTheDocument();
});
