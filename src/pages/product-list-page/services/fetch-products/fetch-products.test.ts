import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {getURL} from '../../../../api/server-url';
import {fetchProducts} from './fetch-products';

describe('when call a function', () => {
  const pageNumber = 1;
  const mockAPI = new MockAdapter(axios);
  const url = getURL({pageNumber});

  it('should return default object data object when server response with 200', async () => {
    const defaultData = {
      totalCount: 0,
      products: [],
    };
    mockAPI
      .onGet(url)
      .reply(200, 'ok');
    const result = await fetchProducts({pageNumber});
    expect(result).toEqual(defaultData);
  });
});
