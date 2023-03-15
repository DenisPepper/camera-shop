import {SearchParamsSchema} from '../schema/search-params-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOrderType, SortType} from '../../../../types/sort-types';
import {DEFAULT_SORT} from '../../../../settings/settings';
import {CategoryType, GroupType} from '../../../../types/filter-types';

const initialState: SearchParamsSchema = {
  sort: '',
  order: '',
  minPrice: '',
  maxPrice: '',
  category: '',
  groups: [],
  bannedGroups: [],
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

    setGroups: (state, action: PayloadAction<GroupType[]>) => {
      state.groups = [...state.groups, ...action.payload];
    },

    removeGroups: (state, action: PayloadAction<GroupType[]>) => {
      const pattern = [...action.payload].join('|');
      const groups = [...state.groups]
        .join(' ')
        .replace(new RegExp(pattern, 'gi'), '')
        .trim()
        .split(' ');
      state.groups = groups as GroupType[];
    },

    setBannedGroups: (state, action: PayloadAction<GroupType[]>) => {
      state.bannedGroups = action.payload;
    },
  },
}
);

export const {actions: searchParamsActions} = searchParamsSlice;
export const {reducer: searchParamsReducer} = searchParamsSlice;
