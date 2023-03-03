import {ServerUrl as Server} from '../../../../../api/server-url';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {StateSchema} from 'store/state-schema';
import {fetchProductByIdWithReviews} from './fetch-product-by-id-with-reviews';
import {stubProductWithReviews} from '../../../../../mocks/stub-product-with-reviews';

describe('when dispatch function', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const id = '15';

  it('should call actions with server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${Server.Product}${id}?_embed=reviews`)
      .reply(200, stubProductWithReviews);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchProductByIdWithReviews({id}));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual(
      [
        fetchProductByIdWithReviews.pending.type,
        fetchProductByIdWithReviews.fulfilled.type
      ]);

  });
});

