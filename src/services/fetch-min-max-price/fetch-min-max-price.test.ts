import {fetchMinMaxPrice} from './fetch-min-max-price';
import {BASE_URL} from '../../api/server-url';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('test of fetchMinMaxPrice func', () => {
  const price = 100;
  const order = 'asc';
  const url = `${BASE_URL}/cameras?_sort=price&_order=${order}&_start=0&_limit=1`;
  const callWhenRejected = jest.fn();

  it('should return expected value on server 200 response', async () => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(200, [{price}]);

    const result = await fetchMinMaxPrice({order, callWhenRejected});

    expect(result).toEqual(price);
  });

  it('should run callback on server 400 response', async () => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(400);

    await fetchMinMaxPrice({order, callWhenRejected});

    expect(callWhenRejected).toBeCalledTimes(1);
  });
});
