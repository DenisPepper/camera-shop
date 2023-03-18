import FilterLevel from './filter-level';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

describe('test of FilterLevel FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {levels: []},
  };
  const store = mockStore(initialState);
  const navigateToDefaultPage = jest.fn();

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterLevel navigateToDefaultPage={navigateToDefaultPage}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(/Уровень/);
    expect(element).toBeInTheDocument();
  });
});
