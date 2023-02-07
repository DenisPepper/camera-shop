import HeaderLink from '../header-link/header-link';
import {DEFAULT_PAGE_NUMBER, Path as to} from '../../settings/settings';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className={'main-nav header__main-nav'}>
      <ul className="main-nav__list">
        <HeaderLink to={`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`}>Каталог</HeaderLink>
        <HeaderLink to={to.Main}>Гарантии</HeaderLink>
        <HeaderLink to={to.Main}>Доставка</HeaderLink>
        <HeaderLink to={to.Main}>О компании</HeaderLink>
      </ul>
    </nav>
  );
}

