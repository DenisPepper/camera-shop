import {SortSchema} from '../schema/sort-schema';
import {DEFAULT_SORT_DIRECTION as DEFAULT} from '../../../../settings/settings';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortDirectionType, SortType} from '../../../../types/sort-types';

const initialState: SortSchema = {
  sort: '',
  direction: DEFAULT,
};

export const sortSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },

    setDirection: (state, action:PayloadAction<SortDirectionType>) => {
      state.direction = action.payload;
    },
  },

});

export const {actions: sortActions} = sortSlice;
export const {reducer: sortReducer} = sortSlice;
