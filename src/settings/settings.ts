export const enum PathName {
  Main ='/',
  Catalog = 'catalog',
  Product = 'product',
  Cart = 'cart',
  NotFound = '*',
}

export const DEFAULT_PAGE_NUMBER = '1';

export const DECIMAL = 10;

export const MAX_PRODUCT_COUNT = 9;

export const MAX_RATING = 5;

export const RATING_STARS = Array.from({length: MAX_RATING}, (_, i) => i + 1);
