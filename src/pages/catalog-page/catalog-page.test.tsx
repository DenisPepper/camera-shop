import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import CatalogPage from './catalog-page';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';


describe('test CatalogPage FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    promo: {isLoaded: false, product: null},
  };
  const store = mockStore(initialState);

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogPage/>
        </BrowserRouter>
      </Provider>
    );
  });
});
