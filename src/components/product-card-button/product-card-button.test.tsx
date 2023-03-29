import ProductCardButton from './product-card-button';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {stubProduct} from '../../mocks/stub-product';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

describe('test ProductCardButton FC', () => {

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
          <ProductCardButton product={stubProduct}/>
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByText(/Купить/);
    expect(element).toBeInTheDocument();
  });
});
