import {Outlet} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {fetchPromoProduct} from '../../services/fetch-promo-product/fetch-promo-product';
import {useLayoutEffect} from 'react';

export default function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPromoProduct());
  }, [dispatch]);

  return (
    <section className={'catalog'}>
      <div className={'container'}>
        <Outlet/>
      </div>
    </section>
  );
}
