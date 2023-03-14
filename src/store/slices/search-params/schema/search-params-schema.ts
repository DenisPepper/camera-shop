import {SortDirectionType, SortType} from '../../../../types/sort-types';

export interface SearchParamsSchema {
  sort: SortType;
  order: SortDirectionType;
  priceGte: string;
  priceLte: string;
}
