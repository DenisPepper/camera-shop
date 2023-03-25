export interface CartItemType {
  id: number;
  count: number;
}

export interface CartInitType {
  totalCount: number;
  items: CartItemType[];
}
