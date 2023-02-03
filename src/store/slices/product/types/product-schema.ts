import {ProductType} from '../../../../types/product-type';

export interface ProductSchema {
  product: ProductType | null;
  isLoaded: boolean;
}
