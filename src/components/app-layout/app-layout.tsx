import {Outlet, useLocation} from 'react-router-dom';
import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import {getPromoIsLoaded} from '../../store/slices/promo/selectors/get-promo-is-loaded/get-promo-is-loaded';
import Banner from '../banner/banner';

export default function AppLayout(): JSX.Element {
  const isLoaded = useSelector(getPromoIsLoaded);

  const {pathname} = useLocation();
  const isCatalogPage = /catalog/.test(pathname);

  return (
    <>
      <SvgSprite/>
      <div className={'wrapper'}>
        <Header/>
        <main>
          {isLoaded && isCatalogPage && <Banner/>}
          <div className={'page-content'}>
            <Outlet/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}

