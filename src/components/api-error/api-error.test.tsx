import ApiError from './api-error';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test of ApiError FC', () => {
  const error = 'error';
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    error: {errors: [error]}
  };
  const store = mockStore(initialState);

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <ApiError/>
      </Provider>
    );
    const element = screen.getByText(error);
    expect(element).toBeInTheDocument();
  });
});
