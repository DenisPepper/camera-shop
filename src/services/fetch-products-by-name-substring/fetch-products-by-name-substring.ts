import {ProductType} from '../../types/product-type';
import {getUrlWithSearchParams} from '../../api/server-url';
import axios from 'axios';
import {PRODUCTS_LIMIT_WHEN_FETCH_BY_NAME as MAX_LIMIT} from '../../settings/settings';

interface fetchProductsByNameSubstringArgs {
  subString: string;
  callWhenRejected: () => void;
}

export const fetchProductsByNameSubstring = async (args: fetchProductsByNameSubstringArgs): Promise<ProductType[]> => {
  const {subString, callWhenRejected} = args;
  const url = `${getUrlWithSearchParams({})}?name_like=${subString}&_limit=${MAX_LIMIT}`;
  try {
    const response = await axios.get<ProductType[]>(url);
    return response.data;
  } catch (err) {
    callWhenRejected();
    return [];
  }
};
