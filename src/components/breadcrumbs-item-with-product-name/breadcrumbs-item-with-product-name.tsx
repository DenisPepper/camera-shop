import {shallowEqual, useSelector} from 'react-redux';
import {getProductName} from '../../store/slices/product/selectors/get-product-name/get-product-name';

/*interface BreadcrumbsItemProps {
  id: string;
}*/

export default function BreadcrumbsItemWithProductName(): JSX.Element {
  const name = useSelector(getProductName, shallowEqual);

  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">
        {name}
      </span>
    </li>
  );
}
