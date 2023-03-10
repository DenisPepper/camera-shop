import {shallowEqual, useSelector} from 'react-redux';
import ProductReviewHeader from '../product-review-header/product-review-header';
import ProductReviewList from '../product-review-list/product-review-list';
import {getReviewTotalCount} from '../../store/slices/review/selectors/get-review-total-count/get-review-total-count';
import React, {useState} from 'react';
import {getReviewList} from '../../store/slices/review/selectors/get-review-list/get-review-list';
import ProductReviewButtons from '../product-review-buttons/product-review-buttons';
import {REVIEW_SHOW_LIMIT as LIMIT} from '../../settings/settings';
import ProductReviewPopup from '../product-review-popup/product-review-popup';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {reviewPopupActions} from '../../store/slices/review-popup/slice/review-popup-slice';
import GratefulFeedbackPopup from '../grateful-feedback-popup/grateful-feedback-popup';
import './product-review.css';
import {postReview} from '../../services/post-review/post-review';
import {
  gratefulFeedbackPopupActions
} from '../../store/slices/grateful-feedback-popup/slice/grateful-feedback-popup-slice';
import {ReviewPrePostType} from '../../types/review-post-type';
import {
  compareIsoDateInReverseOrder
} from '../../lib/compare-iso-date-in-reverse-order/compare-iso-date-in-reverse-order';

interface ProductReviewProps {
  id: number;
}

export default function ProductReview(props: ProductReviewProps): JSX.Element {
  const {id} = props;
  const dispatch = useAppDispatch();
  const reviewTotalCount = useSelector(getReviewTotalCount, shallowEqual);
  const reviews = [...useSelector(getReviewList, shallowEqual)]
    .sort((a, b) => compareIsoDateInReverseOrder(a.createAt, b.createAt));
  const [limit, setLimit] = useState(() => LIMIT);

  const handleOnShowMoreButtonClick = () => {
    if (limit < reviewTotalCount) {
      setLimit((prev) => prev + LIMIT);
    }
  };

  const handleOnPostReviewClick = () => {
    dispatch(reviewPopupActions.open());
  };

  const handleOnReviewPopupSubmit = (data: ReviewPrePostType) => {
    dispatch(postReview({
      review: {...data, cameraId: id},
      callWhenResolved: () => {
        dispatch(reviewPopupActions.reset());
        dispatch(reviewPopupActions.close());
        dispatch(gratefulFeedbackPopupActions.open());
      }
    }));
  };

  const handleOnReviewPopupClose = () => {
    dispatch(reviewPopupActions.close());
  };

  const handleOnGratefulFeedbackPopupClose = () => {
    dispatch(gratefulFeedbackPopupActions.close());
  };

  return (
    <div className={'page-content__section'}>
      <ProductReviewPopup
        key={'PostReviewPopup'}
        handlePopupSubmit={handleOnReviewPopupSubmit}
        handlePopupClose={handleOnReviewPopupClose}
      />
      <GratefulFeedbackPopup
        key={'GratefulFeedbackPopup'}
        handlePopupClose={handleOnGratefulFeedbackPopupClose}
      />
      <section className={'review-block'}>
        <div className={'container'}>
          <ProductReviewHeader
            handlePostReviewClick={handleOnPostReviewClick}
          />
          {reviewTotalCount !== 0 &&
            <ProductReviewList reviews={reviews.slice(0, limit)}/>}
          <ProductReviewButtons
            handleShowMoreButtonClick={handleOnShowMoreButtonClick}
            shouldHide={limit >= reviewTotalCount}
          />
        </div>
      </section>
    </div>
  );
}
