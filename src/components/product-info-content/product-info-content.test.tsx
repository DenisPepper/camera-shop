import ProductInfoContent from './product-info-content';
import {render, screen} from '@testing-library/react';
import {stubProduct} from '../../mocks/stub-product';
import {ProductTab as Tab} from '../../settings/settings';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test ProductInfoContent FC', () => {
  const stubCallback = jest.fn();

  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    cart: {
      product: null,
    }
  };
  const store = mockStore(initialState);

  it('should be render without crushing', () => {
    render(
      <Provider store={store}>
        <ProductInfoContent
          product={stubProduct}
          tab={Tab.Characteristic}
          handleInfoTabClick={stubCallback}
        />);
      </Provider>);
    const element = screen.getByText('Добавить в корзину');
    expect(element).toBeInTheDocument();
  });
});
