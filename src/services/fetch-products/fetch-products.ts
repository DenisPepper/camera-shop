import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductType} from '../../types/product-type';
import {ApiError as error} from '../../api/api-error';
import axios from 'axios';
import {DECIMAL, MAX_PRODUCT_COUNT_ON_CATALOG_PAGE as PAGE_LIMIT} from '../../settings/settings';
import {formatProductName as format} from '../../lib/format-product-name/format-product-name';

interface ReturnedType {
  totalPagesCount: number;
  products: ProductType[];
}

interface fetchProductsArgs {
  url: string;
}

export const fetchProducts = createAsyncThunk<ReturnedType, fetchProductsArgs, { rejectValue: string }>(
  'FETCH_PRODUCTS',
  async (args, thunkAPI) => {
    const {url} = args;
    try {
      const response = await axios.get<Array<ProductType>>(url);
      const maxCatalogCount = parseInt(response.headers['x-total-count'] || '0', DECIMAL);
      const products: ProductType[] = response.data.map((product) => ({...product, name: format(product.name)}));
      const totalPagesCount = products.length ? Math.ceil(maxCatalogCount / PAGE_LIMIT) : 0;
      return {totalPagesCount, products};
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchProducts);
    }
  }
);
