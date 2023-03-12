import {FilterPriceParams, MAX_PRODUCT_COUNT as LIMIT, MAX_PRODUCT_COUNT} from '../settings/settings';
import {SortDirectionType, SortType} from '../types/sort-types';

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

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
  PostReview = 'https://camera-shop.accelerator.pages.academy/reviews/'
}

export const getStart = (pageNumber: number) => (pageNumber - 1) * MAX_PRODUCT_COUNT;

export const getURL = (args: QueryParamsType): string => {
  const {pageNumber, sorting, price} = args;

  let url = 'https://camera-shop.accelerator.pages.academy/cameras';

  if (pageNumber) {
    const start = getStart(pageNumber);
    url = `${url}?_start=${start}&_limit=${LIMIT}`;
  }

  if (sorting) {
    const {sort, order} = sorting;
    url = sort ? `${url}&_sort=${sort}` : url;
    url = order ? `${url}&_order=${order}` : url;
  }

  if (price) {
    const {price_gte: gte, price_lte: lte} = price;
    url = gte ? `${url}&${FilterPriceParams.GreaterThan}=${gte}` : url;
    url = lte ? `${url}&${FilterPriceParams.LessThan}=${lte}` : url;
  }

  return url;
};
