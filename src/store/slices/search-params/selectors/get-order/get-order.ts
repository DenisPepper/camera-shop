import {StateSchema} from '../../../../state-schema';
import {SortOrderType} from '../../../../../types/sort-types';

export const getOrder = (state: StateSchema): SortOrderType => state.searchParams.order;
