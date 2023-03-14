import {SortOrderType, SortType} from '../../../../types/sort-types';
import {CategoryType} from '../../../../types/filter-types';

export interface SearchParamsSchema {
  sort: SortType;
  order: SortOrderType;
  minPrice: string;
  maxPrice: string;
  category: CategoryType;
}
