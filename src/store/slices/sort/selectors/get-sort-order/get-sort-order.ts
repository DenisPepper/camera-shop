import {StateSchema} from '../../../../state-schema';
import {SortDirectionType} from '../../../../../types/sort-types';

export const getSortOrder = (state: StateSchema): SortDirectionType => state.sort.order;
