import {Link} from 'react-router-dom';
import {PathName} from '../../settings/settings';
import {formatPath} from '../../lib/format-path/format-path';

interface BreadcrumbsItemProps {
  path: string;
  notLast: boolean;
}

export default function BreadcrumbsItem(props: BreadcrumbsItemProps): JSX.Element {
  const {path, notLast} = props;

  const to = formatPath(path);

  return (
    <li className="breadcrumbs__item">
      {notLast ?
        <Link className="breadcrumbs__link" to={to}>
          {PathName[path] || 'error'}
          <svg width="5" height="8" aria-hidden="true">
            <use xlinkHref="#icon-arrow-mini"></use>
          </svg>
        </Link>
        :
        <span className="breadcrumbs__link breadcrumbs__link--active">
          {PathName[path] || 'error'}
        </span>}
    </li>
  );
}

