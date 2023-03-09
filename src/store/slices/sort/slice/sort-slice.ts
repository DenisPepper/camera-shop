import {SortSchema} from '../schema/sort-schema';
import {DEFAULT_SORT, DEFAULT_SORT_DIRECTION} from '../../../../settings/settings';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortDirectionType, SortType} from '../../../../types/sort-types';

const initialState: SortSchema = {
  sort: '',
  order: '',
};

export const sortSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      if(state.order === '') {
        state.order = DEFAULT_SORT_DIRECTION;
      }
      state.sort = action.payload;
    },

    setDirection: (state, action:PayloadAction<SortDirectionType>) => {
      if (state.sort === '') {
        state.sort = DEFAULT_SORT;
      }
      state.order = action.payload;
    },
  },

});

export const {actions: sortActions} = sortSlice;
export const {reducer: sortReducer} = sortSlice;
