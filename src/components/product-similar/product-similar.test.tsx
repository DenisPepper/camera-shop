import ProductSimilar from './product-similar';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {stubProduct} from '../../mocks/stub-product';
import {BrowserRouter} from 'react-router-dom';

describe('test ProductSimilar', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);

  it('should render with expected text', () => {
    const initialState: DeepPartial<StateSchema> = {
      similar: {products: [stubProduct]},
      cart: {items: []}
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductSimilar/>
        </BrowserRouter>
      </Provider>);

    const pageTitle = screen.getByText(/Похожие товары/);
    expect(pageTitle).toBeInTheDocument();
  });

});


