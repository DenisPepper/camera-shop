import ProductInfo from './product-info';
import {render} from '@testing-library/react';
import {ProductTab as Tab} from '../../settings/settings';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {stubProduct} from '../../mocks/stub-product';

describe('test ProductInfo FC', () => {
  const stubCallback = jest.fn();
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    product: {product: stubProduct, products: []}
  };
  const store = mockStore(initialState);

  it('should render without crushing', () => {
    render(
      <Provider store={store}>
        <ProductInfo
          tab={Tab.Characteristic}
          onTabClickHandler={stubCallback}
        />
      </Provider>
    );
  });
});

