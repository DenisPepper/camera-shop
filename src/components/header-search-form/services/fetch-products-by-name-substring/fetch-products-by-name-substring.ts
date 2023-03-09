import {ProductType} from '../../../../types/product-type';
import {getURL} from '../../../../api/server-url';
import axios from 'axios';

const MAX_LIMIT = 100;

export const fetchProductsByNameSubstring = async (subString: string): Promise<ProductType[]> => {
  const url = `${getURL({})}?name_like=${subString}&_limit=${MAX_LIMIT}`;
  try {
    const response = await axios.get<ProductType[]>(url);
    return response.data;
  } catch (err) {
    return [];
  }
};
