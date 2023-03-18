import FilterGroupInput from './filter-group-input';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import {groups, ProductGroup} from '../../types/filter-types';

describe('test for FilterGroupInput FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {groups: [], bannedGroups: []},
  };
  const store = mockStore(initialState);
  const navigateToDefaultPage = jest.fn();
  const group: ProductGroup = 'film';

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterGroupInput group={group} navigateToDefaultPage={navigateToDefaultPage}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(new RegExp(groups[group]));
    expect(element).toBeInTheDocument();
  });
});
