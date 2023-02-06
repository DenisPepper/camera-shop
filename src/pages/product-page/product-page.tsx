import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {fetchProductById} from '../../store/slices/product/services/fetch-product-by-id/fetch-product-by-id';


export default function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  dispatch(fetchProductById({id}));

  return (
    <>
      <div className={'page-content__section'}></div>
      <div className={'page-content__section'}></div>
      <div className={'page-content__section'}></div>
    </>
  );
}
