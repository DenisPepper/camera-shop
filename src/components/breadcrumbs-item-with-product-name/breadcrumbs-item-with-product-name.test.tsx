import BreadcrumbsItemWithProductName from './breadcrumbs-item-with-product-name';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {MemoryRouter} from 'react-router-dom';
import {DeepPartial} from '@reduxjs/toolkit';
import {stubProduct} from '../../mocks/stub-product';

describe('test BreadcrumbsItemWithProductName FC', () => {
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    product: {products: [], product: stubProduct},
  };
  const store = mockStore(initialState);
  const path = '/product/1';

  it('should render with stubName', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <BreadcrumbsItemWithProductName/>
        </MemoryRouter>
      </Provider>);
    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();
  });

});
