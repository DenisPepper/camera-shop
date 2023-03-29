import CartItemCount from './cart-item-count';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
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

const handleCountChange = jest.fn();

it('should render without fail', () => {

  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartItemCount
          id={1}
          count={1}
          handleCountChange={handleCountChange}
        />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.getByTestId('quantity');
  expect(element).toBeInTheDocument();
});
