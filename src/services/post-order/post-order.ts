import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ServerUrl as server} from '../../api/server-url';
import {ApiError as error} from '../../api/api-error';
import {StateSchema} from '../../store/state-schema';

interface postOrderArgs {
  callWhenRejected: () => void;
}

export const postOrder = createAsyncThunk<string, postOrderArgs, { rejectValue: string; state: StateSchema }>(
  'POST_ORDER',
  async (args, thunkAPI) => {
    const {callWhenRejected} = args;
    const {cart} = thunkAPI.getState();
    try {
      const response = await axios.post<string>(
        server.PostOrder,
        {
          camerasIds: cart.items.map((item) => item.id),
          coupon: cart.coupon ? cart.coupon : null
        });
      return response.data;
    } catch (err) {
      callWhenRejected();
      return thunkAPI.rejectWithValue(error.OnPostOrder);
    }
  },
);
