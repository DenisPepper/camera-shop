import {MAX_PRODUCT_COUNT as LIMIT, MAX_PRODUCT_COUNT} from '../settings/settings';
import {SortDirectionType, SortType} from '../types/sort-types';

export interface QueryParamsType {
  pageNumber?: number;
  sorting?: {
    sort: SortType;
    sortDirection: SortDirectionType;
  };
}

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
  PostReview = 'https://camera-shop.accelerator.pages.academy/reviews/'
}

export const getStart = (pageNumber: number) => (pageNumber - 1) * MAX_PRODUCT_COUNT;

export const getURL = (args: QueryParamsType): string => {
  const {pageNumber, sorting} = args;

  let url = 'https://camera-shop.accelerator.pages.academy/cameras';

  if (pageNumber) {
    const start = getStart(pageNumber);
    url = `${url}?_start=${start}&_limit=${LIMIT}`;
  }

  if (sorting) {
    const {sort, sortDirection} = sorting;
    url = sort ? `${url}&_sort=${sort}` : url;
    url = sortDirection ? `${url}&_order=${sortDirection}` : url;
  }

  return url;
};
