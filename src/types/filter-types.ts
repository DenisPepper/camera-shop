export type ProductCategory = 'photocamera' | 'videocamera';

export type CategoryType = 'Видеокамера' | 'Фотоаппарат' | '';

export const categories: Record<ProductCategory, CategoryType> = {
  videocamera: 'Видеокамера',
  photocamera: 'Фотоаппарат'
};

export type ProductGroup = 'digital' | 'film' | 'snapshot' | 'collection';

export type GroupType = 'Коллекционная' | 'Цифровая' | 'Моментальная' | 'Плёночная';

export type BannedGroupType = 'Моментальная' | 'Плёночная';

export const groups: Record<ProductGroup, GroupType> = {
  collection: 'Коллекционная',
  digital: 'Цифровая',
  snapshot: 'Моментальная',
  film: 'Плёночная',
};

export type ProductLevel = 'zero' | 'non-professional' | 'professional';

export type LevelType = 'Нулевой' | 'Профессиональный' | 'Любительский';

export const levels: Record<ProductLevel, LevelType> = {
  zero: 'Нулевой',
  professional: 'Профессиональный',
  'non-professional': 'Любительский',
};
