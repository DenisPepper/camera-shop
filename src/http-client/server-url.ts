import {MAX_PRODUCT_COUNT} from '../settings/settings';

export const enum ServerUrl {
  PromoProduct = 'https://camera-shop.accelerator.pages.academy/promo',
  Product = 'https://camera-shop.accelerator.pages.academy/cameras/',
}

export const PRODUCTS_URL = 'https://camera-shop.accelerator.pages.academy/cameras';

export const getStart = (pageNumber: number) => (pageNumber - 1) * MAX_PRODUCT_COUNT;
