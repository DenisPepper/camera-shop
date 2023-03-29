import HeaderCartLink from './header-cart-link';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test HeaderCartLink FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    cart: {
      totalCount: 0,
    }
  };
  const store = mockStore(initialState);

  it('should render without fail', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCartLink/>
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
