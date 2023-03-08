import {ProductType} from '../../../../types/product-type';
import {PRODUCTS_URL as api} from '../../../../api/server-url';
import axios from 'axios';

const MAX_LIMIT = 100;

export const fetchProductsByNameSubstring = async (subString: string): Promise<ProductType[]> => {
  const url = `${api}?name_like=${subString}&_limit=${MAX_LIMIT}`;
  try {
    const response = await axios.get<ProductType[]>(url);
    return response.data;
  } catch (err) {
    return [];
  }
};
