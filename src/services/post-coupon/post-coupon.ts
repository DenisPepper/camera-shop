import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiError as error} from '../../api/api-error';
import {ServerUrl as server} from '../../api/server-url';

export const postCoupon = createAsyncThunk<number, string, { rejectValue: string }>(
  'POST_COUPON',
  async (coupon, thunkAPI) => {
    try {
      const {data} = await axios.post<number>(
        server.PostCoupon,
        {coupon});
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnPostCoupon);
    }
  },
);
