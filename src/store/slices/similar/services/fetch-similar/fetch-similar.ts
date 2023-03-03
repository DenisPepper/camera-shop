import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductType} from '../../../../../types/product-type';
import {ServerUrl as server} from '../../../../../api/server-url';
import {ErrorsConfig as error} from '../../../../../api/errors-config';
import {SIMILAR_FETCHING_LIMIT as LIMIT} from '../../../../../settings/settings';
import {formatProductName as format} from '../../../../../lib/format-product-name/format-product-name';

interface fetchSimilarProps {
  id: string;
}

export const fetchSimilar = createAsyncThunk<ProductType[], fetchSimilarProps, {rejectValue: error}>(
  'FETCH_SIMILAR',
  async (args, thunkAPI) => {
    const {id} = args;
    try {
      const response = await axios.get<ProductType[]>(`${server.Product}${id}/similar?_start=0&_limit=${LIMIT}`);
      const products: ProductType[] = response.data.map((product) => ({...product, name: format(product.name)}));
      return products;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchSimilar);
    }
  }
);
