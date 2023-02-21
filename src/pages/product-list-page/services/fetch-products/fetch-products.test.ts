import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {getStart, PRODUCTS_URL as api} from '../../../../api/server-url';
import {MAX_PRODUCT_COUNT} from '../../../../settings/settings';
import {fetchProducts} from './fetch-products';

describe('when call a function', () => {
  const pageNumber = 1;
  const mockAPI = new MockAdapter(axios);
  const url = `${api}?_start=${getStart(pageNumber)}&_limit=${MAX_PRODUCT_COUNT}`;

  it('should return default object data object when server response with 200', async () => {
    const defaultData = {
      totalCount: 0,
      products: [],
    };
    mockAPI
      .onGet(url)
      .reply(200, 'ok');
    const result = await fetchProducts(pageNumber);
    expect(result).toEqual(defaultData);
  });
});
