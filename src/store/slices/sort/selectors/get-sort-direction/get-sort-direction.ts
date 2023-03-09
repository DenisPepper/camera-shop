import {StateSchema} from '../../../../state-schema';
import {SortDirectionType} from '../../../../../types/sort-types';

export const getSortDirection = (state: StateSchema): SortDirectionType => state.sort.direction;
