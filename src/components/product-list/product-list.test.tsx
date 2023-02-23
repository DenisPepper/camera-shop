import ProductList from './product-list';
import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test ProductList FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);

  const initialState: DeepPartial<StateSchema> = {
    product: {products: [], product: null},
  };

  const store = mockStore(initialState);

  it('should render without crushing', () => {
    render(<Provider store={store}><ProductList/></Provider>);
  });
});
