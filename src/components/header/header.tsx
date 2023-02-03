import HeaderNav from '../header-nav/header-nav';
import HeaderSearchForm from '../header-search-form/header-search-form';
import HeaderCartLink from '../header-cart-link/header-cart-link';
import {RoutesConfig} from '../../settings/settings';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className={'header'} id={'header'}>
      <div className={'container'}>
        <Link className="header__logo" to={RoutesConfig.Main} aria-label="Переход на главную">
          <Logo xlinkHref={'#icon-logo'}/>
        </Link>
        <HeaderNav/>
        <HeaderSearchForm/>
        <HeaderCartLink/>
      </div>
    </header>
  );
}
