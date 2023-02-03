import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {PromoProductType} from '../../../../../types/promo-product-type';
import {ServerUri as server} from '../../../../../http-client/server-uri';
import {ErrorsConfig as error} from '../../../../../http-client/errors-config';

export const fetchPromoProduct = createAsyncThunk<PromoProductType, undefined, {rejectValue: error}>(
  'FETCH_PROMO_PRODUCT',
  async (_args, thunkAPI) => {
    try {
      const response = await axios.get<PromoProductType>(server.PromoProduct);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchPromo);
    }
  }
);
