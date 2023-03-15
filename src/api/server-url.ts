import {MAX_PRODUCT_COUNT_ON_CATALOG_PAGE as PAGE_LIMIT} from '../settings/settings';
import {SearchParamsType} from '../types/search-params-types';

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
  PostReview = 'https://camera-shop.accelerator.pages.academy/reviews/',
}

export const getStart = (pageNumber: number) => (pageNumber - 1) * PAGE_LIMIT;

export const getUrlWithSearchParams = (args: SearchParamsType): string => {
  const {pageNumber, searchParams: params} = args;

  let url = 'https://camera-shop.accelerator.pages.academy/cameras';

  if (pageNumber) {
    const start = getStart(pageNumber);
    url = `${url}?_start=${start}&_limit=${PAGE_LIMIT}`;
  }

  if (params?.sort) {
    url = `${url}&_sort=${params?.sort}`;
  }

  if (params?.order) {
    url = `${url}&_order=${params?.order}`;
  }

  if (params?.minPrice) {
    url = `${url}&price_gte=${params?.minPrice}`;
  }

  if (params?.maxPrice) {
    url = `${url}&price_lte=${params?.maxPrice}`;
  }

  if (params?.category) {
    url = `${url}&category=${params?.category}`;
  }

  if (params?.groups && params?.groups.length > 0) {
    url = params.groups.reduce((acc, group) => `${acc}&type=${group}`, url);
  }

  return url;
};
