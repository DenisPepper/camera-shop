import {ProductType} from '../../types/product-type';
import {ServerUrl as Server} from '../../api/server-url';
import axios from 'axios';

interface fetchProductByIdArgs {
  id: number;
  callWhenRejected: () => void;
}

export const fetchProductById = async (args: fetchProductByIdArgs): Promise<ProductType | undefined> => {
  const {id, callWhenRejected} = args;
  const URL = `${Server.Product}${id}`;
  try {
    const {data} = await axios.get<ProductType>(URL);
    return data;
  } catch (err) {
    callWhenRejected();
    return undefined;
  }
};

