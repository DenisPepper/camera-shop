import {postCoupon} from './post-coupon';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../api/server-url';

const mockAPI = new MockAdapter(axios);
const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const store = mockStore();
const discount = 10;
const coupon = 'coupon';

afterEach(() => {
  store.clearActions();
});

describe('test postCoupon func', () => {

  it('should call expected actions on server 200 response', async () => {
    mockAPI
      .onPost(Server.PostCoupon)
      .reply(200, {discount, coupon});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postCoupon(coupon));

    const actions = store.getActions().map((action: Partial<Action<{ type: string }>>) => action.type);

    const expectedActions = [
      postCoupon.pending.type,
      postCoupon.fulfilled.type,
    ];

    expect(actions).toEqual(expectedActions);

  });

  it('should call expected actions on server 400 response', async () => {
    mockAPI
      .onPost(Server.PostCoupon)
      .reply(400, '');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postCoupon(coupon));

    const actions = store.getActions().map((action: Partial<Action<{ type: string }>>) => action.type);

    const expectedActions = [
      postCoupon.pending.type,
      postCoupon.rejected.type,
    ];

    expect(actions).toEqual(expectedActions);
  });


});
