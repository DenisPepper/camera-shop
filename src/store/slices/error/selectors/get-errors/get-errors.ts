import {StateSchema} from '../../../../state-schema';

export const getErrors = (state: StateSchema): string[] => state.error.errors;
