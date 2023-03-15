import {StateSchema} from '../../../../state-schema';
import {GroupType} from '../../../../../types/filter-types';

export const getGroups = (state: StateSchema): GroupType[] => state.searchParams.groups;
