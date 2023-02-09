import Product from '../../components/product/product';
import {shallowEqual, useSelector} from 'react-redux';
import {fetchProductById} from '../../store/slices/product/services/fetch-product-by-id/fetch-product-by-id';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getProductId} from '../../store/slices/product/selectors/get-product-id/get-product-id';

export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const lastLoadedID = useSelector(getProductId, shallowEqual)?.toString() || '';

  useEffect(() => {
    if (lastLoadedID !== id) {
      dispatch(fetchProductById({id}));
    }
  }, [id, lastLoadedID, dispatch]);

  return lastLoadedID === id ?
    <>
      <Product key={'Product'}/>
      <div className={'page-content__section'}></div>
      <div className={'page-content__section'}></div>
    </>
    :
    <div className={'page-content__section'}></div>;
}
