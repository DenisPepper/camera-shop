import SortInput from './sort-input';
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
    sort: '',
  },
};
const store = mockStore(initialState);

describe('test of SortInput FC', () => {

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SortInput sort={'price'}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByTestId('SortInput');
    expect(element).toHaveClass('catalog-sort__btn-text');
  });
});
