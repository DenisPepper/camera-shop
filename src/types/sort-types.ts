export type SortType = 'price' | 'rating' | '';

export type SortInputType = {
  id: string;
  label: string;
}

export type SortParamsType = {
  sort: SortType;
  order: SortDirectionType;
}

export interface SortProps extends SortParamsType {
  handleValuePick: (params: SortParamsType) => void;
}

export type SortDirectionType = 'asc' | 'desc' | '';

export type SortModifierType = 'up' | 'down';

