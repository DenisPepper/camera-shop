import FilterLevelInput from './filter-level-input';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {levels, ProductLevel} from '../../types/filter-types';
import {BrowserRouter} from 'react-router-dom';

describe('test of FilterLevelInput FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {levels: []},
  };
  const store = mockStore(initialState);
  const handleLevelChange = jest.fn();
  const level: ProductLevel = 'zero';

  it('should render witjout fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterLevelInput level={level} handleLevelChange={handleLevelChange}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(new RegExp(levels[level]));
    expect(element).toBeInTheDocument();
  });
});
