import ProductInfo from '../../components/product-info/product-info';
import {shallowEqual, useSelector} from 'react-redux';
import {fetchProductById} from '../../store/slices/product/services/fetch-product-by-id/fetch-product-by-id';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {Navigate, useParams, useSearchParams} from 'react-router-dom';
import React, {useEffect} from 'react';
import {getProductId} from '../../store/slices/product/selectors/get-product-id/get-product-id';
import ProductSimilar from '../../components/product-similar/product-similar';
import {fetchSimilar} from '../../store/slices/similar/services/fetch-similar/fetch-similar';
import ProductReview from '../../components/product-review/product-review';
import {
  fetchReviews
} from '../../store/slices/review/services/fetch-reviews/fetch-reviews';
import {DECIMAL, Path, ProductTab as Tab} from '../../settings/settings';

export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const lastLoadedID = useSelector(getProductId, shallowEqual)?.toString() || '';
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || '';

  const handleOnTabClick = (tabName: string) => {
    setSearchParams({tab: tabName});
  };

  useEffect(() => {
    if (lastLoadedID !== id) {
      dispatch(fetchProductById({id}));
      dispatch(fetchSimilar({id}));
      dispatch(fetchReviews({id}));
    }
  }, [id, lastLoadedID, dispatch]);

  if (tab !== Tab.Characteristic && tab !== Tab.Description) {
    return <Navigate to={Path.NotFound} key={'Navigate'}/>;
  }

  return lastLoadedID === id ?
    <>
      <ProductInfo
        key={'ProductInfo'}
        tab={tab}
        onTabClickHandler={handleOnTabClick}
      />
      <ProductSimilar key={'ProductSimilar'}/>
      <ProductReview key={'ProductReview'} id={parseInt(id, DECIMAL)}/>
    </>
    :
    <div
      className={'page-content__section'}
      key={'page-content__section'}
    />;
}
