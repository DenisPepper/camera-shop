import {Outlet, useLocation} from 'react-router-dom';
import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';
import {shallowEqual, useSelector} from 'react-redux';
import {getPromoIsLoaded} from '../../store/slices/promo/selectors/get-promo-is-loaded/get-promo-is-loaded';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import UpButton from '../up-button/up-button';
import ApiError from '../api-error/api-error';
import CartManager from '../cart-manager/cart-manager';

export default function AppLayout(): JSX.Element {
  const isLoaded = useSelector(getPromoIsLoaded, shallowEqual);

  const {pathname} = useLocation();
  const isCatalogPage = /catalog/.test(pathname);
  const isProductPage = /product/.test(pathname);

  return (
    <>
      <SvgSprite/>
      <CartManager/>
      <ApiError/>
      <div className={'wrapper'} data-testid={'app-layout'}>
        <Header key={'Header'}/>
        <main>
          {isLoaded && isCatalogPage && <Banner/>}
          <div className={'page-content'}>
            <Breadcrumbs key={'Breadcrumbs'}/>
            <Outlet/>
          </div>
        </main>
        {isProductPage && <UpButton/>}
        <Footer key={'Footer'}/>
      </div>
    </>
  );
}

