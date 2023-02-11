import ProductInfo from '../../components/product-info/product-info';
import {shallowEqual, useSelector} from 'react-redux';
import {fetchProductById} from '../../store/slices/product/services/fetch-product-by-id/fetch-product-by-id';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getProductId} from '../../store/slices/product/selectors/get-product-id/get-product-id';
import ProductSimilar from '../../components/product-similar/product-similar';
import {fetchSimilar} from '../../store/slices/similar/services/fetch-similar/fetch-similar';
import ProductReview from '../../components/product-review/product-review';
import {
  fetchReviews
} from '../../store/slices/review/services/fetch-reviews/fetch-reviews';

export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const lastLoadedID = useSelector(getProductId, shallowEqual)?.toString() || '';

  useEffect(() => {
    if (lastLoadedID !== id) {
      dispatch(fetchProductById({id}));
      dispatch(fetchSimilar({id}));
      dispatch(fetchReviews({id}));
    }
  }, [id, lastLoadedID, dispatch]);

  return lastLoadedID === id ?
    <>
      <ProductInfo key={'ProductInfo'}/>
      <ProductSimilar key={'ProductSimilar'}/>
      <ProductReview key={'ProductReview'}/>
    </>
    :
    <div className={'page-content__section'}></div>;
}
