import {Link} from 'react-router-dom';
import {Path as to} from '../../settings/settings';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalCount} from '../../store/slices/cart/selectors/get-total-count/get-total-count';

export default function HeaderCartLink(): JSX.Element {
  const count = useSelector(getTotalCount, shallowEqual);

  return (
    <Link className="header__basket-link" to={`/${to.Cart}`}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      {
        !!count && <span className="header__basket-count">{count}</span>
      }
    </Link>
  );
}
