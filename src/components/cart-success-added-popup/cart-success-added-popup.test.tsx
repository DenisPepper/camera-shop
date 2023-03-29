import CartSuccessAddedPopup from './cart-success-added-popup';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {successAddedItemPopupIsOpen: true}
};
const store = mockStore(initialState);

const handlePopupClose = jest.fn();
const handleContinueButtonClick = jest.fn();
const handleNavigateToCartClick = jest.fn();

describe('test CartSuccessAddedPopup FC', () => {

  it('should render without fail', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartSuccessAddedPopup
            handlePopupClose={handlePopupClose}
            handleContinueButtonClick={handleContinueButtonClick}
            handleNavigateToCartClick={handleNavigateToCartClick}
          />
        </BrowserRouter>
      </Provider>
    );

    const element = screen.getByText(/Товар успешно добавлен в корзину/);
    expect(element).toBeInTheDocument();
  });
});
