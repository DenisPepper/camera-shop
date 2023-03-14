export type SortType = 'price' | 'rating' | '';

export type SortInputType = {
  id: string;
  label: string;
}

/*export type SortParamsType = {
  sort: SortType;
  order: SortDirectionType;
}*/

// TODO rename as SortOrderType
export type SortDirectionType = 'asc' | 'desc' | '';


