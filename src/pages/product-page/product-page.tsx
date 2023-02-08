import Product from '../../components/product/product';
import {shallowEqual, useSelector} from 'react-redux';
import {fetchProductById} from '../../store/slices/product/services/fetch-product-by-id/fetch-product-by-id';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getProduct} from '../../store/slices/product/selectors/get-product/get-product';

export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const product = useSelector(getProduct, shallowEqual);

  useEffect(() => {
    dispatch(fetchProductById({id}));
  }, [id, dispatch]);

  return !!product && product?.id.toString() === id ?
    <>
      <Product key={'Product'} product={product}/>
      <div className={'page-content__section'}></div>
      <div className={'page-content__section'}></div>
    </>
    :
    <div className={'page-content__section'}></div>;
}
