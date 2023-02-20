import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {PromoProductType} from '../../../../../types/promo-product-type';
import {ServerUrl as server} from '../../../../../api/server-url';
import {ErrorsConfig as error} from '../../../../../api/errors-config';

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
