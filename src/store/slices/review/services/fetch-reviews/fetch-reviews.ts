import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ReviewType} from '../../../../../types/review-type';
import {ServerUrl as server} from '../../../../../api/server-url';
import {ErrorsConfig as error} from '../../../../../api/errors-config';

interface FetchSimilarProps {
  id: string;
}

interface Returned {
  totalCount: number;
  reviews: ReviewType[];
}

export const fetchReviews = createAsyncThunk<Returned, FetchSimilarProps, { rejectValue: error }>(
  'FETCH_REVIEWS',
  async (args, thunkAPI) => {
    const {id} = args;
    try {
      const response = await axios.get<ReviewType[]>(
        `${server.Product}${id}/reviews`
      );
      const totalCount = response.data.length;
      const reviews = response.data;
      return {totalCount, reviews};
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchReviewList);
    }
  }
);
