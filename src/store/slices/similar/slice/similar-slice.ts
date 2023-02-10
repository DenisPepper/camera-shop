import {createSlice} from '@reduxjs/toolkit';
import {SimilarSchema} from '../schema/similar-schema';
import {fetchSimilar} from '../services/fetch-similar/fetch-similar';

const initialState: SimilarSchema = {
  products: null,
};

export const similarSlice = createSlice({
  name: 'similar',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilar.pending, (state) => {
        state.products = null;
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  }
});

export const { actions: similarActions } = similarSlice;
export const { reducer: similarReducer } = similarSlice;
