import {Link} from 'react-router-dom';
import {RoutesConfig} from '../../settings/settings';

export default function HeaderCartLink(): JSX.Element {
  return(
    <Link className="header__basket-link" to={RoutesConfig.Cart}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
    </Link>
  );
}
