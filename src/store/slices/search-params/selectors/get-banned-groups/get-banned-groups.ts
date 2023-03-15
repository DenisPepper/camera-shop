import {StateSchema} from '../../../../state-schema';
import {GroupType} from '../../../../../types/filter-types';

export const getBannedGroups = (state: StateSchema): GroupType[] => state.searchParams.bannedGroups;
