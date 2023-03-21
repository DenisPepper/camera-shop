import {Link} from 'react-router-dom';
import {Path as to} from '../../settings/settings';

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  handleLinkClick: () => void;
}

export default function PaginationButton(props: PaginationButtonProps): JSX.Element {
  const {page, currentPage, handleLinkClick} = props;

  const modifier = page === currentPage ? 'pagination__link--active' : '';

  return (
    <li className="pagination__item">
      <Link
        className={`pagination__link ${modifier}`}
        to={`/${to.Catalog}/${page}`}
        onClick={handleLinkClick}
      >
        {page}
      </Link>
    </li>
  );
}
