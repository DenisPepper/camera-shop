import CartAddItemPopup from './cart-add-item-popup';
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
  cart: {product: null, addItemPopupIsOpen: true}
};
const store = mockStore(initialState);

const handlePopupClose = jest.fn();

const handlePopupAdd = jest.fn();

it('should render without fail', () => {

  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartAddItemPopup
          handlePopupClose={handlePopupClose}
          handlePopupAdd={handlePopupAdd}
        />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.getByText(/Добавить товар в корзину/);
  expect(element).toBeInTheDocument();
});
