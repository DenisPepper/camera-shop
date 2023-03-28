import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiError as error} from '../../api/api-error';
import {ServerUrl as server} from '../../api/server-url';
import {CouponResponseType} from '../../types/cart-types';


export const postCoupon = createAsyncThunk<CouponResponseType, string, { rejectValue: string }>(
  'POST_COUPON',
  async (coupon, thunkAPI) => {
    try {
      const {data: discount} = await axios.post<number>(
        server.PostCoupon,
        {coupon});
      return {discount, coupon};
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnPostCoupon);
    }
  },
);
