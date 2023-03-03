import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../../../state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../../../../api/server-url';
import {fetchPromoProduct} from './fetch-promo-product';
import {stubPromo} from '../../../../../mocks/stub-promo';

describe('when dispatch function', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);

  it('should call actions with server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onGet(Server.PromoProduct)
      .reply(200, stubPromo);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchPromoProduct());

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual(
      [
        fetchPromoProduct.pending.type,
        fetchPromoProduct.fulfilled.type
      ]);
  });
});
