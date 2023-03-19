import {SortType} from '../types/sort-types';

export const enum Path {
  Main ='/',
  Catalog = 'catalog',
  Product = 'product',
  Cart = 'cart',
  Guarantee = 'guarantee',
  NotFound = '*',
  Delivery = 'delivery',
  About = 'about',
  Courses = 'courses',
  Blog = 'blog',
  Community = 'community',
  Faq = 'faq',
  Feedback = 'feedback',
}

export const PathName: Record<string, string> = {
  'root': 'Главная',
  [Path.Catalog]: 'Каталог',
  [Path.Product]: 'Каталог',
  [Path.Cart]: 'Корзина',
  [Path.Guarantee]: 'Гарантии',
  [Path.Delivery]: 'Доставка',
  [Path.About]: 'О компании',
  [Path.Courses]: 'Курсы операторов',
  [Path.Blog]: 'Блог',
  [Path.Community]: 'Сообщество',
  [Path.Faq]: 'FAQ',
  [Path.Feedback]: 'Задать вопрос',
};

export const PRODUCT_NAME_EXCLUSION_PATTERNS = ['рет', 'кам'];

export const enum ProductTab {
  Characteristic = 'characteristic',
  Description = 'description',
}

export const DEFAULT_PAGE_NUMBER = '1';

export const DECIMAL = 10;

export const MAX_PRODUCT_COUNT_ON_CATALOG_PAGE = 9;

export const MAX_RATING = 5;

export const RATING_STARS = Array.from({length: MAX_RATING}, (_, i) => i + 1);

export const DEFAULT_CATALOG_LINK = `/${Path.Catalog}/${DEFAULT_PAGE_NUMBER}`;

export const DEFAULT_PRODUCT_TAB = ProductTab.Characteristic;

export const SIMILAR_FETCHING_LIMIT = 20;

export const REVIEW_SHOW_LIMIT = 3;

export const TEXTAREA_MIN_LENGTH = 5;

export const PRODUCTS_LIMIT_WHEN_FETCH_BY_NAME = 100;

export const DEFAULT_REVIEW_POPUP_VALUES = {userName: '', userPlus: '', userMinus: '', userComment: '', rate: '0'};

export const DEFAULT_SORT: SortType = 'price';

/**
 это координата расчитана по макету, как высота хеддера + высота баннера
 */
export const WINDOW_SCROLL_TO_TOP_COORD = 348;
