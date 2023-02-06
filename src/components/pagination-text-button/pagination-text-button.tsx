import {Link} from 'react-router-dom';
import {PathName as to} from '../../settings/settings';

interface PaginationTextButtonProps {
  currentPage: number;
  text: 'Назад' | 'Далее';
}

export default function PaginationTextButton(props: PaginationTextButtonProps): JSX.Element {
  const {
    currentPage,
    text,
  } = props;

  const page = text === 'Назад' ? currentPage - 1 : currentPage + 1;

  return (
    <li className="pagination__item">
      <Link
        className="pagination__link pagination__link--text"
        to={`/${to.Catalog}/${page}`}
      >
        {text}
      </Link>
    </li>
  );
}
