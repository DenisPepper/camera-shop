import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {PromoProductType} from '../../types/promo-product-type';
import {ServerUrl as server} from '../../api/server-url';
import {ApiError as error} from '../../api/api-error';
import {formatProductName as format} from '../../lib/format-product-name/format-product-name';

export const fetchPromoProduct = createAsyncThunk<PromoProductType, undefined, {rejectValue: string}>(
  'FETCH_PROMO_PRODUCT',
  async (_args, thunkAPI) => {
    try {
      const response = await axios.get<PromoProductType>(server.PromoProduct);
      const promo: PromoProductType = {...response.data, name: format(response.data.name)};
      return promo;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchPromo);
    }
  }
);
