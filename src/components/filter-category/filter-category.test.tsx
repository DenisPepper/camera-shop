import FilterCategory from './filter-category';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

describe('test of FilterCategory FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {category: ''},
  };
  const store = mockStore(initialState);
  const navigateToDefaultPage = jest.fn();

  it('should render witout props', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterCategory navigateToDefaultPage={navigateToDefaultPage}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(/Категория/);
    expect(element).toBeInTheDocument();
  });
});
