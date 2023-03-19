import HeaderSearchForm from './header-search-form';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

describe('test HeaderSearchForm FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {};
  const store = mockStore(initialState);

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderSearchForm/>
        </BrowserRouter>
      </Provider>
    );
    const form = screen.getByTestId(/form-search/);
    expect(form).toBeInTheDocument();
  });
});
