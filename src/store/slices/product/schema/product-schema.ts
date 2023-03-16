import {ProductType} from '../../../../types/product-type';

export interface ProductSchema {
  isLoading: boolean;
  isProductLoading: boolean;
  product: ProductType | null;
  products: ProductType[];
  totalPagesCount: number;
}
