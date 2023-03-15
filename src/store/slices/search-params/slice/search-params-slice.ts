import {SearchParamsSchema} from '../schema/search-params-schema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOrderType, SortType} from '../../../../types/sort-types';
import {DEFAULT_SORT} from '../../../../settings/settings';
import {CategoryType, GroupType, LevelType} from '../../../../types/filter-types';

const initialState: SearchParamsSchema = {
  sort: '',
  order: '',
  minPrice: '',
  maxPrice: '',
  category: '',
  groups: [],
  bannedGroups: [],
  levels: [],
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

    removeCategory: (state) => {
      state.category = '';
    },

    addGroup: (state, action: PayloadAction<GroupType>) => {
      state.groups = [...state.groups, action.payload];
    },

    removeGroup: (state, action: PayloadAction<GroupType>) => {
      state.groups = state.groups.filter((group) => group !== action.payload);
    },

    addGroups: (state, action: PayloadAction<GroupType[]>) => {
      state.groups = [...state.groups, ...action.payload];
    },

    removeGroups: (state, action: PayloadAction<GroupType[]>) => {
      const pattern = [...action.payload].join('|');
      const groups = [...state.groups]
        .join(' ')
        .replace(new RegExp(pattern, 'gi'), '')
        .trim()
        .split(' ')
        .filter((group) => group.length > 0);
      state.groups = groups as GroupType[];
    },

    addBannedGroups: (state, action: PayloadAction<GroupType[]>) => {
      state.bannedGroups = action.payload;
    },

    removeBannedGroups: (state) => {
      state.bannedGroups = [];
    },

    addLevel: (state, action: PayloadAction<LevelType>) => {
      state.levels = [...state.levels, action.payload];
    },

    removeLevel: (state, action: PayloadAction<LevelType>) => {
      state.levels = state.levels.filter((level) => level !== action.payload);
    },
  },
}
);

export const {actions: searchParamsActions} = searchParamsSlice;
export const {reducer: searchParamsReducer} = searchParamsSlice;
