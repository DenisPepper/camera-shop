import axios from 'axios';
import {ProductType} from '../../types/product-type';
import {SortOrderType} from '../../types/sort-types';
import {BASE_URL} from '../../api/server-url';

interface fetchMinMaxPriceArgs {
  order: SortOrderType;
  callWhenRejected: () => void;
}

export const fetchMinMaxPrice = async (args: fetchMinMaxPriceArgs): Promise<number> => {
  const {order, callWhenRejected} = args;
  const URL = `${BASE_URL}/cameras?_sort=price&_order=${order}&_start=0&_limit=1`;
  try {
    const {data} = await axios.get<ProductType[]>(URL);
    return data[0].price;
  } catch (err) {
    callWhenRejected();
    return 0;
  }
};
