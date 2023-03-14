import {SearchParamsSchema} from '../schema/search-params-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOrderType, SortType} from '../../../../types/sort-types';
import {DEFAULT_SORT} from '../../../../settings/settings';

const initialState: SearchParamsSchema = {
  sort: '',
  order: '',
  minPrice: '',
  maxPrice: '',
};

export const searchParamsSlice = createSlice({
  name: 'search-params',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },

    setOrder: (state, action: PayloadAction<SortOrderType>) => {
      state.order = action.payload;
      if (state.order && state.sort === '') {
        state.sort = DEFAULT_SORT;
      }
    },

    setMinPrice: (state, action: PayloadAction<string>) => {
      state.minPrice = action.payload;
    },

    setMaxPrice: (state, action: PayloadAction<string>) => {
      state.maxPrice = action.payload;
    },
  },
}
);

export const {actions: searchParamsActions} = searchParamsSlice;
export const {reducer: searchParamsReducer} = searchParamsSlice;
