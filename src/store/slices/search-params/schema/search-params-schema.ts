import {SortOrderType, SortType} from '../../../../types/sort-types';
import {BannedGroupType, CategoryType, GroupType, LevelType} from '../../../../types/filter-types';

export interface SearchParamsSchema {
  sort: SortType;
  order: SortOrderType;
  minPrice: string;
  maxPrice: string;
  category: CategoryType;
  groups: GroupType[];
  bannedGroups: BannedGroupType[];
  levels: LevelType[];
}
