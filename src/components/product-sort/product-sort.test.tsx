import ProductSort from './product-sort';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

it('should render ProductSort FC', async () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    sort: {sort:'', direction:''}
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      < ProductSort/>
    </Provider>);
  const element = await screen.findByText(/Сортировать/);
  expect(element).toBeInTheDocument();
});
