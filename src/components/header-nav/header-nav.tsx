import HeaderLink from '../header-link/header-link';
import {Path as to, PathName, DEFAULT_CATALOG_LINK} from '../../settings/settings';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className={'main-nav header__main-nav'}>
      <ul className="main-nav__list">
        <HeaderLink to={DEFAULT_CATALOG_LINK}>{PathName[to.Catalog]}</HeaderLink>
        <HeaderLink to={to.Guarantee}>{PathName[to.Guarantee]}</HeaderLink>
        <HeaderLink to={to.Delivery}>{PathName[to.Delivery]}</HeaderLink>
        <HeaderLink to={to.About}>{PathName[to.About]}</HeaderLink>
      </ul>
    </nav>
  );
}

