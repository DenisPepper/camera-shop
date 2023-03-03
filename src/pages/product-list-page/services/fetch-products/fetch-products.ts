import {ProductType} from '../../../../types/product-type';
import {getStart, PRODUCTS_URL as api} from '../../../../api/server-url';
import {DECIMAL, MAX_PRODUCT_COUNT} from '../../../../settings/settings';
import axios from 'axios';
import {formatProductName as format} from '../../../../lib/format-product-name/format-product-name';

interface FetchProductsReturnedType {
  totalCount: number;
  products: ProductType[];
}

const DEFAULT_DATA: FetchProductsReturnedType = {
  totalCount: 0,
  products: [],
};

export const fetchProducts = async (pageNumber: number): Promise<FetchProductsReturnedType> => {
  const url = `${api}?_start=${getStart(pageNumber)}&_limit=${MAX_PRODUCT_COUNT}`;
  try {
    const response = await axios.get<ProductType[]>(url);
    const totalProducts = parseInt(response.headers['x-total-count'] || '0', DECIMAL);
    const totalCount = Math.ceil(totalProducts / MAX_PRODUCT_COUNT);
    const products:ProductType[] = response.data.map((product) => ({...product, name: format(product.name)}));
    return totalCount > 0 ? {totalCount, products} : DEFAULT_DATA;
  } catch (err) {
    return DEFAULT_DATA;
  }
};

