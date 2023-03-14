import {StateSchema} from '../../../../state-schema';
import {SortDirectionType} from '../../../../../types/sort-types';

export const getOrder = (state: StateSchema): SortDirectionType => state.searchParams.order;
