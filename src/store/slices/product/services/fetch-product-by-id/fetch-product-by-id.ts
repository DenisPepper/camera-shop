import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductType} from '../../../../../types/product-type';
import {ServerUrl} from '../../../../../api/server-url';
import {ErrorsConfig as error} from '../../../../../api/errors-config';

interface fetchProductByIdProps {
  id: string;
}

export const fetchProductById = createAsyncThunk<ProductType, fetchProductByIdProps, {rejectValue: error}>(
  'FETCH_PRODUCT_BY_ID',
  async (fetchProductByIdProps, thunkAPI) => {
    const {id} = fetchProductByIdProps;
    try {
      const response = await axios.get<ProductType>(`${ServerUrl.Product}${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchProductByID);
    }
  }
);
