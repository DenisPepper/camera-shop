import {ReviewType} from '../../../../types/review-type';

export interface ReviewSchema {
  list: ReviewType[];
  totalCount: number;
}
