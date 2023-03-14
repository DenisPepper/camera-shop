import {SortDirectionType, SortType} from './sort-types';
import {FilterPriceParams} from '../settings/settings';

export interface QueryParamsType {
  pageNumber?: number;
  sorting?: {
    sort?: SortType;
    order?: SortDirectionType;
  };
  price?: {
    [FilterPriceParams.GreaterThan]?: number;
    [FilterPriceParams.LessThan]?: number;
  };
}
