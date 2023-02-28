import {Outlet} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {fetchPromoProduct} from '../../store/slices/promo/services/fetch-promo-product/fetch-promo-product';

export default function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fetchPromoProduct());

  return (
    <section className={'catalog'}>
      <div className={'container'}>
        <Outlet/>
      </div>
    </section>
  );
}
