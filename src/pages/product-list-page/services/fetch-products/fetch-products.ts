import {ProductType} from '../../../../types/product-type';
import {getStart, PRODUCTS_URL as api} from '../../../../api/server-url';
import {DECIMAL, MAX_PRODUCT_COUNT} from '../../../../settings/settings';
import axios from 'axios';

interface FetchProductsReturnedType {
  totalCount: number;
  products: ProductType[];
}

export const fetchProducts = async (pageNumber: number): Promise<FetchProductsReturnedType> => {
  const url = `${api}?_start=${getStart(pageNumber)}&_limit=${MAX_PRODUCT_COUNT}`;
  const response = await axios.get<ProductType[]>(url);
  const totalProducts = parseInt(response.headers['x-total-count'] || '', DECIMAL);
  const totalCount = Math.ceil(totalProducts / MAX_PRODUCT_COUNT);
  return {totalCount, products: response.data};
};

