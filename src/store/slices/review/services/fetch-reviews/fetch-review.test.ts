import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../../../state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../../../../api/server-url';
import {fetchReviews} from './fetch-reviews';

describe('when dispatch function', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const id = '15';

  it('should call actions with server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${Server.Product}${id}/reviews`)
      .reply(200, 'ok');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchReviews({id}));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual(
      [
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type
      ]);
  });
});
