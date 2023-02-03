import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductType} from '../../../../../types/product-type';
import {ServerUri} from '../../../../../http-client/server-uri';
import {ErrorsConfig as error} from '../../../../../http-client/errors-config';

interface fetchProductByIdProps {
  id: string;
}

export const fetchProductById = createAsyncThunk<ProductType, fetchProductByIdProps, {rejectValue: error}>(
  'FETCH_PRODUCT_BY_ID',
  async (fetchProductByIdProps, thunkAPI) => {
    const {id} = fetchProductByIdProps;
    try {
      const response = await axios.get<ProductType>(`${ServerUri.Product}${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchProductByID);
    }
  }
);
