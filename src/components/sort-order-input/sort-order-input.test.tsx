import SortOrderInput from './sort-order-input';
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
  searchParams: {
    order: '',
  },
};
const store = mockStore(initialState);

describe('test of SortOrderInput FC', () => {

  it('shoul render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SortOrderInput order={'asc'}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByTestId('SortOrderInput');
    expect(element).toHaveClass('catalog-sort__btn');
  });
});
