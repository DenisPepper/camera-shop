import {SearchParamsSchema} from '../store/slices/search-params/schema/search-params-schema';

export interface SearchParamsType {
  pageNumber?: number;
  searchParams?: Partial<SearchParamsSchema>;
}
