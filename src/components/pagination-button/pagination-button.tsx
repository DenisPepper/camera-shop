import {Link} from 'react-router-dom';
import {PathName as to} from '../../settings/settings';

interface PaginationButtonProps {
  page: number;
  currentPage: number;
}

export default function PaginationButton(props: PaginationButtonProps): JSX.Element {
  const {page, currentPage} = props;

  const modifier = page === currentPage ? 'pagination__link--active' : '';

  return (
    <li className="pagination__item">
      <Link
        className={`pagination__link ${modifier}`}
        to={`/${to.Catalog}/${page}`}
      >
        {page}
      </Link>
    </li>
  );
}
