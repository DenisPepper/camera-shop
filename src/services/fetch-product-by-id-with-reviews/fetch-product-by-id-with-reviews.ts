import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductType, ProductTypeWithReviews} from '../../types/product-type';
import {ServerUrl} from '../../api/server-url';
import {ErrorsConfig as error} from '../../api/errors-config';
import {ReviewType} from '../../types/review-type';
import {formatProductName as format} from '../../lib/format-product-name/format-product-name';

interface fetchProductByIdProps {
  id: string;
}

interface Returned {
  product: ProductType;
  reviews: ReviewType[];
  reviewCount: number;
}

export const fetchProductByIdWithReviews = createAsyncThunk<Returned, fetchProductByIdProps, {rejectValue: error}>(
  'FETCH_PRODUCT_BY_ID_WITH_REVIEWS',
  async (fetchProductByIdProps, thunkAPI) => {
    const {id} = fetchProductByIdProps;
    try {
      const response = await axios.get<ProductTypeWithReviews>(`${ServerUrl.Product}${id}?_embed=reviews`);
      const {reviews = [], reviewCount = 0} = response.data;
      const product: ProductType = Object.assign(
        {}, response.data,
        {reviews: undefined, name: format(response.data.name)});
      return {product, reviews, reviewCount};
    } catch (err) {
      return thunkAPI.rejectWithValue(error.OnFetchProductByID);
    }
  }
);
