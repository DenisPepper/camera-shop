import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ReviewType} from '../../../../../types/review-type';
import {ServerUrl as server} from '../../../../../http-client/server-url';
import {ErrorsConfig as error} from '../../../../../http-client/errors-config';

interface fetchSimilarProps {
  id: string;
  limit: number;
}

export const fetchReviewList = createAsyncThunk<ReviewType[], fetchSimilarProps, {rejectValue: error}>(
  'FETCH_REVIEW_LIST',
  async (args, thunkAPI) => {
    const {id, limit} = args;
    try {
      const response = await axios.get<ReviewType[]>(`${server.Product}${id}/reviews?_start=0&_limit=${limit}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchReviewList);
    }
  }
);
