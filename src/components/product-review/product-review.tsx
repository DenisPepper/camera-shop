import {shallowEqual, useSelector} from 'react-redux';
import ProductReviewHeader from '../product-review-header/product-review-header';
import ProductReviewList from '../product-review-list/product-review-list';
import {getReviewTotalCount} from '../../store/slices/review/selectors/get-review-total-count/get-review-total-count';
import React, {useState} from 'react';
import {getReviewList} from '../../store/slices/review/selectors/get-review-list/get-review-list';
import ProductReviewButtons from '../product-review-buttons/product-review-buttons';
import {REVIEW_SHOW_LIMIT as LIMIT} from '../../settings/settings';
import {ReviewType} from '../../types/review-type';
import ProductReviewPopup from '../product-review-popup/product-review-popup';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {reviewPopupActions} from '../../store/slices/review-popup/slice/review-popup-slice';
import GratefulFeedbackPopup from '../grateful-feedback-popup/grateful-feedback-popup';

const compareInReverseOrder = (a: ReviewType, b: ReviewType) => {
  let result = 0;
  if (a.createAt < b.createAt) {
    result = 1;
  } else if (a.createAt > b.createAt) {
    result = -1;
  }
  return result;
};

export default function ProductReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviewTotalCount = useSelector(getReviewTotalCount, shallowEqual);
  const reviews = [...useSelector(getReviewList, shallowEqual)].sort((a, b) => compareInReverseOrder(a, b));
  const [limit, setLimit] = useState(() => LIMIT);

  const handleOnClickShowMore = () => {
    if (limit < reviewTotalCount) {
      setLimit((prev) => prev + LIMIT);
    }
  };

  const handleOnClickPostReview = () => {
    dispatch(reviewPopupActions.open());
  };

  return (
    <div className={'page-content__section'}>
      <ProductReviewPopup key={'PostReviewPopup'}/>
      <GratefulFeedbackPopup key={'GratefulFeedbackPopup'}/>
      {
        reviewTotalCount !== 0 &&
        <section className={'review-block'}>
          <div className={'container'}>
            <ProductReviewHeader onClickPostReview={handleOnClickPostReview}/>
            <ProductReviewList reviews={reviews.slice(0, limit)}/>
            <ProductReviewButtons
              onClickShowMore={handleOnClickShowMore}
              isVisible={limit >= reviewTotalCount}
            />
          </div>
        </section>
      }
    </div>
  );
}
