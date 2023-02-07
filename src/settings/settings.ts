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

export const DEFAULT_PAGE_NUMBER = '1';

export const DECIMAL = 10;

export const MAX_PRODUCT_COUNT = 9;

export const MAX_RATING = 5;

export const RATING_STARS = Array.from({length: MAX_RATING}, (_, i) => i + 1);

export const DEFAULT_CATALOG_LINK = `/${Path.Catalog}/${DEFAULT_PAGE_NUMBER}`;
