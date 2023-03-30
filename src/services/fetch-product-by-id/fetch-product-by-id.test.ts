import {fetchProductById} from './fetch-product-by-id';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {ServerUrl as Server} from '../../api/server-url';
import {stubProduct} from '../../mocks/stub-product';

describe('test fetchProductById func', () => {
  const id = 1;
  const callWhenRejected = jest.fn();
  const url = `${Server.Product}${id}`;

  it('should return expected value on server 200 response', async () => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(200, stubProduct);

    const result = await fetchProductById({id, callWhenRejected});
    expect(result).toEqual(stubProduct);
  });

  it('should run callback on server 400 response and return undefined', async () => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(400, undefined);
    const result = await fetchProductById({id, callWhenRejected});
    expect(result).toEqual(undefined);
    expect(callWhenRejected).toBeCalledTimes(1);
  });
});
