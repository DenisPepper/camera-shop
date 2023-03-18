import FilterGroup from './filter-group';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

describe('test of FilterGroup FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {groups: [], bannedGroups: []},
  };
  const store = mockStore(initialState);
  const handleLevelChange = jest.fn();

  it('shoul render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterGroup navigateToDefaultPage={handleLevelChange}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(/Тип камеры/);
    expect(element).toBeInTheDocument();
  });
});
