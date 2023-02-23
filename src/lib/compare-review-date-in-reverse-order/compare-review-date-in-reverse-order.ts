import {ReviewType} from '../../types/review-type';

export const compareReviewDateInReverseOrder = (a: ReviewType, b: ReviewType) => {
  let result = 0;
  if (a.createAt < b.createAt) {
    result = 1;
  } else if (a.createAt > b.createAt) {
    result = -1;
  }
  return result;
};
