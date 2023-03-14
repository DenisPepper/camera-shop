import HeaderNav from '../header-nav/header-nav';
import HeaderSearchForm from '../header-search-form/header-search-form';
import HeaderCartLink from '../header-cart-link/header-cart-link';
import {Path} from '../../settings/settings';
import Logo from '../logo/logo';

export default function Header(): JSX.Element {
  return (
    <header className={'header'} id={'header'} data-testid={'header'}>
      <div className={'container'}>
        <a className="header__logo" href={Path.Main} aria-label="Переход на главную">
          <Logo xlinkHref={'#icon-logo'}/>
        </a>
        <HeaderNav/>
        <HeaderSearchForm/>
        <HeaderCartLink/>
      </div>
    </header>
  );
}
