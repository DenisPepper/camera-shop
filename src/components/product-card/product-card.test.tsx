import ProductCard from './product-card';
import {render} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';
import {BrowserRouter} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test ProductCard FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    cart: {
      items: [],
    }
  };
  const store = mockStore(initialState);

  it('should render without crushing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={stubProduct}/>
        </BrowserRouter>
      </Provider>);
  });
});
