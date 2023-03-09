import {ProductType} from '../../../../types/product-type';
import {QueryParamsType, getURL} from '../../../../api/server-url';
import {DECIMAL, MAX_PRODUCT_COUNT as LIMIT} from '../../../../settings/settings';
import axios from 'axios';
import {formatProductName as format} from '../../../../lib/format-product-name/format-product-name';

interface ReturnedType {
  totalCount: number;
  products: ProductType[];
}

const DEFAULT_DATA: ReturnedType = {
  totalCount: 0,
  products: [],
};

export const fetchProducts = async (args: QueryParamsType): Promise<ReturnedType> => {
  try {
    const response = await axios.get<ProductType[]>(getURL(args));
    const totalProducts = parseInt(response.headers['x-total-count'] || '0', DECIMAL);
    const totalCount = Math.ceil(totalProducts / LIMIT);
    const products: ProductType[] = response.data.map((product) => ({...product, name: format(product.name)}));
    return totalCount > 0 ? {totalCount, products} : DEFAULT_DATA;
  } catch (err) {
    return DEFAULT_DATA;
  }
};

