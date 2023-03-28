import CartItemsList from '../../components/cart-items-list/cart-items-list';
import CartFooter from '../../components/cart-footer/cart-footer';

export default function CartPage(): JSX.Element {
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
