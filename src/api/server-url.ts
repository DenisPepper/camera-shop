import {
  FilterPriceParams as PriceParams,
  MAX_PRODUCT_COUNT_ON_CATALOG_PAGE as PAGE_LIMIT,
} from '../settings/settings';
import {QueryParamsType} from '../types/search-params-types';

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
  PostReview = 'https://camera-shop.accelerator.pages.academy/reviews/',
}

export const getStart = (pageNumber: number) => (pageNumber - 1) * PAGE_LIMIT;

export const getURL = (args: QueryParamsType): string => {
  const {pageNumber, sorting, price} = args;

  let url = 'https://camera-shop.accelerator.pages.academy/cameras';

  if (pageNumber) {
    const start = getStart(pageNumber);
    url = `${url}?_start=${start}&_limit=${PAGE_LIMIT}`;
  }

  if (sorting) {
    const {sort, order} = sorting;
    url = sort ? `${url}&_sort=${sort}` : url;
    url = order ? `${url}&_order=${order}` : url;
  }

  if (price) {
    const {price_gte: gte, price_lte: lte} = price;
    url = gte ? `${url}&${PriceParams.GreaterThan}=${gte}` : url;
    url = lte ? `${url}&${PriceParams.LessThan}=${lte}` : url;
  }

  return url;
};
