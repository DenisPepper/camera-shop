import './not-found-page.css';
import {Link} from 'react-router-dom';
import {Path} from '../../settings/settings';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={'wrapper--not-found'}>
      <h1 className="title title--h1">404 Not Found</h1>
      <Link className={'main-nav__link'} to={Path.Main}>
        Перейти на главную страницу
      </Link>
    </div>
  );
}
