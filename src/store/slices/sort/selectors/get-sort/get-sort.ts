import {StateSchema} from '../../../../state-schema';
import {SortType} from '../../../../../types/sort-types';

export const getSort = (state: StateSchema): SortType => state.sort.sort;
