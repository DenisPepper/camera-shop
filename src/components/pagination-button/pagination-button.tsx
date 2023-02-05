import {Link} from 'react-router-dom';

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
        to={`/catalog/${page}`}
      >
        {page}
      </Link>
    </li>
  );
}
