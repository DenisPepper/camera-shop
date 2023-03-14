import {StateSchema} from '../../../../state-schema';
import {CategoryType} from '../../../../../types/filter-types';

export const getCategory = (state: StateSchema): CategoryType => state.searchParams.category;
