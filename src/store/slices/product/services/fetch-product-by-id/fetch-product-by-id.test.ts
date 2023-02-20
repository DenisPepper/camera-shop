import {ServerUrl as Server} from '../../../../../api/server-url';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {StateSchema} from 'store/state-schema';
import {fetchProductById} from './fetch-product-by-id';

describe('when dispatch function', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const id = '15';

  it('should call actions with server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${Server.Product}${id}`)
      .reply(200, 'ok');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchProductById({id}));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual(
      [
        fetchProductById.pending.type,
        fetchProductById.fulfilled.type
      ]);

  });
});

