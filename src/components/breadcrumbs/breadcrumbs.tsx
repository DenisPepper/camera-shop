import BreadcrumbsItem from '../breadcrumbs-item/breadcrumbs-item';
import {useLocation, useParams} from 'react-router-dom';
import BreadcrumbsItemWithProductName from '../breadcrumbs-item-with-product-name/breadcrumbs-item-with-product-name';
import {Path} from '../../settings/settings';

export default function Breadcrumbs(): JSX.Element {
  const {id} = useParams();
  const {pathname} = useLocation();
  const paths = `root${pathname}`
    .replace(`${Path.Product}`, Path.Catalog)
    .split('/')
    .filter((path) => /\D/.test(path));

  return (
    <div className="breadcrumbs" data-testid={'breadcrumbs'}>
      <div className="container">
        <ul className={'breadcrumbs__list'}>
          {
            paths.map((path, index) =>
              (
                <BreadcrumbsItem
                  key={path}
                  path={path}
                  notLast={index < paths.length - 1 || !!id}
                />
              ))
          }
          {
            !!id &&
            <BreadcrumbsItemWithProductName
              key={'BreadcrumbsItemWithProductName'}
            />
          }
        </ul>
      </div>
    </div>
  );
}
