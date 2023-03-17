import Filter from './filter';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';

describe('test Filter', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {
      sort: '',
      order: '',
      minPrice: '',
      maxPrice: '',
      levels: [],
      groups: [],
      bannedGroups: [],
      category: '',
    },
  };
  const stubsStore = mockStore(initialState);

  it('should render without fail', () => {
    render(
      <Provider store={stubsStore}>
        <BrowserRouter>
          <Filter/>
        </BrowserRouter>
      </Provider>);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
