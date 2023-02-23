import {AppRouter} from '../app-router/app-router';
import {fetchPromoProduct} from '../../store/slices/promo/services/fetch-promo-product/fetch-promo-product';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fetchPromoProduct());

  return (
    <AppRouter/>
  );
}
