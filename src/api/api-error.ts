import {ApiErrorSchema} from '../types/api-errors-type';

export const ApiError: ApiErrorSchema = {
  OnFetchPromo: 'Ошибка при получении промо-продукта',
  OnFetchProducts: 'Ошибка при получении списка продуктов',
  OnFetchProductByID: 'Ошибка при получении продукта по ID',
  OnFetchSimilar: 'Ошибка при получении похожих товаров',
  OnFetchMinPrice: 'Ошибка при получении минимальной цены',
  OnFetchMaxPrice: 'Ошибка при получении максимальной цены',
  OnPostReview: 'Ошибка при записи нового комментария',
};
