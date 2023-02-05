import HeaderLink from '../header-link/header-link';
import {DEFAULT_PAGE_NUMBER, RoutesConfig} from '../../settings/settings';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className={'main-nav header__main-nav'}>
      <ul className="main-nav__list">
        <HeaderLink to={`/catalog/${DEFAULT_PAGE_NUMBER}`}>Каталог</HeaderLink>
        <HeaderLink to={RoutesConfig.NotFound}>Гарантии</HeaderLink>
        <HeaderLink to={RoutesConfig.NotFound}>Доставка</HeaderLink>
        <HeaderLink to={RoutesConfig.NotFound}>О компании</HeaderLink>
      </ul>
    </nav>
  );
}

