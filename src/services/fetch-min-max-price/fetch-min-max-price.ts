import axios from 'axios';
import {ProductType} from '../../types/product-type';
import {SortOrderType} from '../../types/sort-types';


export const fetchMinMaxPrice = async(order: SortOrderType):Promise<number> => {
  const URL = `https://camera-shop.accelerator.pages.academy/cameras?_sort=price&_order=${order}&_start=0&_limit=1`;
  try {
    const {data} = await axios.get<ProductType[]>(URL);
    return data[0].price;
  } catch (err) {
    return 0;
  }
};
