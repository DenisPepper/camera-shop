import {MAX_PRODUCT_COUNT_ON_CATALOG_PAGE as PAGE_LIMIT} from '../settings/settings';
import {SearchParamsType} from '../types/search-params-types';

export const BASE_URL = 'https://camera-shop.accelerator.pages.academy';

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
  PostReview = 'https://camera-shop.accelerator.pages.academy/reviews/',
  PostCoupon = 'https://camera-shop.accelerator.pages.academy/coupons',
}

export const getStart = (pageNumber: number) => (pageNumber - 1) * PAGE_LIMIT;

export const getUrlWithSearchParams = (args: SearchParamsType): string => {
  const {pageNumber, searchParams: params} = args;

  let url = `${BASE_URL}/cameras`;

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

  if (params?.minPrice && params?.maxPrice && params?.minPrice === params?.maxPrice) {
    url = `${url}&price=${params?.minPrice}`;
  }

  if (params?.minPrice && !/price=/g.test(url)) {
    url = `${url}&price_gte=${params?.minPrice}`;
  }

  if (params?.maxPrice && !/price=/g.test(url)) {
    url = `${url}&price_lte=${params?.maxPrice}`;
  }

  if (params?.category) {
    url = `${url}&category=${params?.category}`;
  }

  if (params?.groups?.length) {
    url = params.groups.reduce((acc, group) => `${acc}&type=${group}`, url);
  }

  if(params?.levels?.length) {
    url = params.levels.reduce((acc, level) => `${acc}&level=${level}`, url);
  }

  return url;
};
