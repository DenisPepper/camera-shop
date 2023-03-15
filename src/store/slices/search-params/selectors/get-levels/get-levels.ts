import {StateSchema} from '../../../../state-schema';
import {LevelType} from '../../../../../types/filter-types';

export const getLevels = (state: StateSchema): LevelType[] => state.searchParams.levels;
