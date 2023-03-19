import {fetchProducts} from './fetch-products';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {stubProduct} from '../../mocks/stub-product';
import {BASE_URL} from '../../api/server-url';

const stubAPI = new MockAdapter(axios);

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const stubStore = mockStore();

const url = `${BASE_URL}/cameras`;

describe('test of fetchProducts()', () => {

  it('should call actions with server 200 response', async () => {
    stubAPI
      .onGet(url)
      .reply(200, [stubProduct], {'x-total-count': 1});


    expect(stubStore.getActions()).toEqual([]);

    await stubStore.dispatch(fetchProducts({url}));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const actions = stubStore.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProducts.pending.type,
      fetchProducts.fulfilled.type,
    ]);
  });
});
