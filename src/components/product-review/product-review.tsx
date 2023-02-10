import {shallowEqual, useSelector} from 'react-redux';
import ProductReviewHeader from '../product-review-header/product-review-header';
import ProductReviewList from '../product-review-list/product-review-list';
import {getReviewTotalCount} from '../../store/slices/review/selectors/get-review-total-count/get-review-total-count';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {fetchReviewList} from '../../store/slices/review/services/fetch-review-list/fetch-review-list';
import {getReviewList} from '../../store/slices/review/selectors/get-review-list/get-review-list';
import ProductReviewButtons from '../product-review-buttons/product-review-buttons';
import {REVIEW_FETCHING_LIMIT as LIMIT} from '../../settings/settings';

interface ProductReviewProps {
  id: string;
}

/* eslint-disable no-console */
export default function ProductReview(props: ProductReviewProps): JSX.Element {
  const {id} = props;

  const reviewTotalCount = useSelector(getReviewTotalCount, shallowEqual);
  const reviews = useSelector(getReviewList, shallowEqual);

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(() => LIMIT);

  const handleOnClickShowMore = () => {
    if (limit < reviewTotalCount) {
      setLimit((prev) => prev + LIMIT);
    }
  };

  /* const onScroll = useCallback((evt: Event) => {
     const doc = evt.currentTarget as typeof document;
     const target = doc.documentElement;
     if (target.scrollHeight - target.scrollTop <= target.clientHeight + 200) {
       setLimit(limit + LIMIT);
     }
   }, []);*/

  useEffect(() => {
    dispatch(fetchReviewList({id, limit}));
  }, [limit, id, dispatch]);

  /*  useEffect(() => {
      document.addEventListener('scroll', onScroll);
      return function () {
        document.removeEventListener('scroll', onScroll);
      };
    }, [limit]);*/

  return (
    <div className={'page-content__section'}>
      {
        reviewTotalCount !== 0 &&
        <section className={'review-block'}>
          <div className={'container'}>
            <ProductReviewHeader/>
            <ProductReviewList reviews={reviews}/>
            <ProductReviewButtons
              onClickShowMore={handleOnClickShowMore}
              isVisible={limit > reviewTotalCount}
            />
          </div>
        </section>
      }
    </div>
  );
}
