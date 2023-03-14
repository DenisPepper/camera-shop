import {SearchParamsSchema} from '../schema/search-params-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortDirectionType, SortType} from '../../../../types/sort-types';
import {DEFAULT_SORT} from '../../../../settings/settings';

const initialState: SearchParamsSchema = {
  sort: '',
  order: '',
  priceGte: '',
  priceLte: '',
};

export const searchParamsSlice = createSlice({
  name: 'search-params',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortDirectionType>) => {
      state.order = action.payload;
      if (state.order && state.sort === '') {
        state.sort = DEFAULT_SORT;
      }
    }
  },
}
);

export const {actions: searchParamsActions} = searchParamsSlice;
export const {reducer: searchParamsReducer} = searchParamsSlice;
