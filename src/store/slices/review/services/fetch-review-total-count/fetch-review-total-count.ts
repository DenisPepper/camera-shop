import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ReviewType} from '../../../../../types/review-type';
import {ServerUrl as server} from '../../../../../http-client/server-url';
import {ErrorsConfig as error} from '../../../../../http-client/errors-config';
import {DECIMAL, REVIEW_FETCHING_LIMIT as LIMIT} from '../../../../../settings/settings';

interface fetchSimilarProps {
  id: string;
}

export const fetchReviewTotalCount = createAsyncThunk<number, fetchSimilarProps, { rejectValue: error }>(
  'FETCH_REVIEW_TOTAL_COUNT',
  async (args, thunkAPI) => {
    const {id} = args;
    try {
      const response = await axios.get<ReviewType[]>(
        `${server.Product}${id}/reviews?_start=0&_limit=${LIMIT}`
      );
      return parseInt(response.headers['x-total-count'], DECIMAL) || 0;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchReviewList);
    }
  }
);
