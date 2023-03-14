import {SearchParamsSchema} from '../schema/search-params-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOrderType, SortType} from '../../../../types/sort-types';
import {DEFAULT_SORT} from '../../../../settings/settings';
import {CategoryType} from '../../../../types/filter-types';

const initialState: SearchParamsSchema = {
  sort: '',
  order: '',
  minPrice: '',
  maxPrice: '',
  category: '',
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

    setCategory: (state, action: PayloadAction<CategoryType>) => {
      state.category = action.payload;
    },
  },
}
);

export const {actions: searchParamsActions} = searchParamsSlice;
export const {reducer: searchParamsReducer} = searchParamsSlice;
