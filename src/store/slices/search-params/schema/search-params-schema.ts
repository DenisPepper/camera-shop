import {SortOrderType, SortType} from '../../../../types/sort-types';

export interface SearchParamsSchema {
  sort: SortType;
  order: SortOrderType;
  priceGte: string;
  priceLte: string;
}
