import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorSchema} from '../schema/error-schema';

const stubErrors: string[] = ['Ошибка сервера 1', 'Ошибка сервера 2', 'Ошибка сервера 3', 'Ошибка сервера 4'];

const initialState: ErrorSchema = {
  errors: stubErrors,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      state.errors.push(action.payload);
    },
    removeError: (state, action: PayloadAction<string>) => {
      state.errors = state.errors.filter((err) => err !== action.payload);
    },
  },
});

export const {actions: errorSliceActions} = errorSlice;
export const {reducer: errorSliceReducer} = errorSlice;
