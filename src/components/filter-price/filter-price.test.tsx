import FilterPrice from './filter-price';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

describe('test of FilterPrice FC', () => {

  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    searchParams: {minPrice: '10', maxPrice: '100'},
  };
  const store = mockStore(initialState);
  const navigateToDefaultPage = jest.fn();

  it('should render without fail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterPrice
            navigateToDefaultPage={navigateToDefaultPage}
          />
        </BrowserRouter>
      </Provider>);
    const element = screen.getByText(/Цена/);
    expect(element).toBeInTheDocument();
  });
});
