import {shallowEqual, useSelector} from 'react-redux';
import {getProductName} from '../../store/slices/product/selectors/get-product-name/get-product-name';
import {useParams} from 'react-router-dom';
import {getProductId} from '../../store/slices/product/selectors/get-product-id/get-product-id';

export default function BreadcrumbsItemWithProductName(): JSX.Element {
  const {id} = useParams() || '';
  const name = useSelector(getProductName, shallowEqual);
  const lastLoadedID = useSelector(getProductId, shallowEqual)?.toString() || '';

  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">
        {id === lastLoadedID ? name : ''}
      </span>
    </li>
  );
}
