import CartItemsList from '../../components/cart-items-list/cart-items-list';
import CartFooter from '../../components/cart-footer/cart-footer';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';

export default function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(cartActions.clearProducts());
  },);

  return (
    <section className={'basket'}>
      <div className={'container'}>
        <h1 className="title title--h2">Корзина</h1>
        <CartItemsList key={'CartItemsList'}/>
        <CartFooter key={'CartFooter'}/>
      </div>
    </section>
  );
}
