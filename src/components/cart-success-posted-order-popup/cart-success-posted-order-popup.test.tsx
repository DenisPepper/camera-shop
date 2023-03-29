import CartSuccessPostedOrderPopup from './cart-success-posted-order-popup';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {successPostedOrderPopupIsOpen: true}
};
const store = mockStore(initialState);

const handlePopupClose = jest.fn();
const handleContinueButtonClick = jest.fn();

it('should render without fail', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartSuccessPostedOrderPopup
          handlePopupClose={handlePopupClose}
          handleContinueButtonClick={handleContinueButtonClick}
        />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.getByText(/Спасибо за покупку/);
  expect(element).toBeInTheDocument();
});
