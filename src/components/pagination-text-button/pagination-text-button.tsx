import {Link} from 'react-router-dom';
import {Path as to} from '../../settings/settings';

interface PaginationTextButtonProps {
  currentPage: number;
  text: 'Назад' | 'Далее';
  handleLinkClick: () => void;
}

export default function PaginationTextButton(props: PaginationTextButtonProps): JSX.Element {
  const {currentPage, text, handleLinkClick, } = props;

  const page = text === 'Назад' ? currentPage - 1 : currentPage + 1;

  const handleClick = () => handleLinkClick();

  return (
    <li className="pagination__item">
      <Link
        className="pagination__link pagination__link--text"
        to={`/${to.Catalog}/${page}`}
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
}
