import {Outlet} from 'react-router-dom';
import Banner from '../../components/banner/banner';
import {useSelector} from 'react-redux';
import {getPromoIsLoaded} from '../../store/slices/promo/selectors/get-promo-is-loaded/get-promo-is-loaded';

export default function CatalogPage(): JSX.Element {
  const isLoaded = useSelector(getPromoIsLoaded);

  return (
    <main>
      {isLoaded && <Banner/>}
      <Outlet/>
    </main>
  );
}
