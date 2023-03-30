import {postOrder} from './post-order';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../api/server-url';
import {DeepPartial} from '@reduxjs/toolkit';
import {stubCartItem} from '../../mocks/stub-cart-item';

const mockAPI = new MockAdapter(axios);
const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  cart: {items: [stubCartItem]}
};
const store = mockStore(initialState);
const callWhenRejected = jest.fn();

afterEach(() => {
  store.clearActions();
});

describe('test postCoupon func', () => {

  it('should call expected actions on server 200 response', async () => {
    mockAPI
      .onPost(Server.PostOrder)
      .reply(200, 'OK');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postOrder({callWhenRejected}));

    const actions = store.getActions().map((action: Partial<Action<{ type: string }>>) => action.type);

    const expectedActions = [
      postOrder.pending.type,
      postOrder.fulfilled.type,
    ];

    expect(actions).toEqual(expectedActions);
  });

  it('should call expected actions on server 400 response', async () => {
    mockAPI
      .onPost(Server.PostOrder)
      .reply(400, '');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postOrder({callWhenRejected}));

    const actions = store.getActions().map((action: Partial<Action<{ type: string }>>) => action.type);

    const expectedActions = [
      postOrder.pending.type,
      postOrder.rejected.type,
    ];

    expect(actions).toEqual(expectedActions);
    expect(callWhenRejected).toBeCalledTimes(1);

  });

});
