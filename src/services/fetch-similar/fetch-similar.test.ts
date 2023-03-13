import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../api/server-url';
import {SIMILAR_FETCHING_LIMIT as LIMIT} from '../../settings/settings';
import {fetchSimilar} from './fetch-similar';
import {stubProduct} from '../../mocks/stub-product';

describe('when dispatch an action', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const id = '15';

  it('should pending and fulfilled on server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${Server.Product}${id}/similar?_start=0&_limit=${LIMIT}`)
      .reply(200, [stubProduct]);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchSimilar({id}));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual(
      [
        fetchSimilar.pending.type,
        fetchSimilar.fulfilled.type
      ]);
  });

});
