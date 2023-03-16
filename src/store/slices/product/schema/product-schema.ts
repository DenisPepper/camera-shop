import {ProductType} from '../../../../types/product-type';

export interface ProductSchema {
  isLoading: boolean;
  product: ProductType | null;
  products: ProductType[];
  totalPagesCount: number;
}
