import {shallowEqual, useSelector} from 'react-redux';
import ProductReviewHeader from '../product-review-header/product-review-header';
import ProductReviewList from '../product-review-list/product-review-list';
import {getReviewTotalCount} from '../../store/slices/review/selectors/get-review-total-count/get-review-total-count';
import React, {useState} from 'react';
import {getReviewList} from '../../store/slices/review/selectors/get-review-list/get-review-list';
import ProductReviewButtons from '../product-review-buttons/product-review-buttons';
import {REVIEW_SHOW_LIMIT as LIMIT} from '../../settings/settings';
import {ReviewType} from '../../types/review-type';
import PostReviewPopup from '../post-review-popup/post-review-popup';

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
  const reviewTotalCount = useSelector(getReviewTotalCount, shallowEqual);
  const reviews = [...useSelector(getReviewList, shallowEqual)].sort((a, b) => compareInReverseOrder(a, b));
  const [limit, setLimit] = useState(() => LIMIT);
  const [isPopUpOpen, setIsPopUpOpen] = useState(() => false);

  const handleOnClickShowMore = () => {
    if (limit < reviewTotalCount) {
      setLimit((prev) => prev + LIMIT);
    }
  };

  const handleOnClickPostReview = () => setIsPopUpOpen((prev) => !prev);

  return (
    <div className={'page-content__section'}>
      <PostReviewPopup key={'PostReviewPopup'} isOpen={isPopUpOpen}/>
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
