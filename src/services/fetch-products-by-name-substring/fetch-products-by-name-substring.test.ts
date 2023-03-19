import {fetchProductsByNameSubstring} from './fetch-products-by-name-substring';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {stubProduct} from '../../mocks/stub-product';
import {BASE_URL} from '../../api/server-url';
import {PRODUCTS_LIMIT_WHEN_FETCH_BY_NAME as MAX_LIMIT} from '../../settings/settings';

describe('test of fetchProductsByNameSubstring func', () => {
  const subString = 'product name';
  const url = `${BASE_URL}/cameras?name_like=${subString}&_limit=${MAX_LIMIT}`;
  const callWhenRejected = jest.fn();

  it('should return expected value on server 200 response', async () => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(200, [stubProduct]);

    const result = await fetchProductsByNameSubstring({subString, callWhenRejected});

    expect(result).toEqual([stubProduct]);
  });

  it('should run callback on server 400 response', async() => {
    const mockAPI = new MockAdapter(axios);
    mockAPI
      .onGet(url)
      .reply(400);

    await fetchProductsByNameSubstring({subString, callWhenRejected});
    expect(callWhenRejected).toBeCalledTimes(1);
  });
});
