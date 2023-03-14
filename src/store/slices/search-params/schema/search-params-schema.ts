import {SortOrderType, SortType} from '../../../../types/sort-types';

export interface SearchParamsSchema {
  sort: SortType;
  order: SortOrderType;
  minPrice: string;
  maxPrice: string;
}
