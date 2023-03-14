export type ProductCategory = 'photocamera' | 'videocamera';

export type CategoryType = 'Видеокамера' | 'Фотоаппарат' | '';

export const categories: Record<ProductCategory, CategoryType> = {
  videocamera: 'Видеокамера',
  photocamera: 'Фотоаппарат'
};

export type ProductGroup = 'digital' | 'film' | 'snapshot' | 'collection';

export type ProductLevel = 'zero' | 'non-professional' | 'professional';
