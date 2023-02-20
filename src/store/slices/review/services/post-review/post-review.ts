import {createAsyncThunk} from '@reduxjs/toolkit';
import {ReviewPostType} from '../../../../../types/review-post-type';
import {ReviewType} from '../../../../../types/review-type';
import {ErrorsConfig as error} from '../../../../../api/errors-config';
import axios from 'axios';
import {ServerUrl as server} from '../../../../../api/server-url';


interface PostReviewProps {
  review: ReviewPostType;
  whenResolved: () => void;
}

export const postReview = createAsyncThunk<ReviewType, PostReviewProps, {rejectValue: error}>(
  'POST_REVIEW',
  async (props, thunkAPI) => {
    const {review, whenResolved} = props;
    try {
      const response = await axios.post<ReviewType>(
        server.PostReview, review
      );
      whenResolved();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnPostReview);
    }
  }
);
