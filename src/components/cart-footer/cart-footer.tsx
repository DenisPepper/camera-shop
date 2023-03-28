import CartPromo from '../cart-promo/cart-promo';
import CartTotalCost from '../cart-total-cost/cart-total-cost';

export default function CartFooter(): JSX.Element {

  return (
    <div className={'basket__summary'}>
      <CartPromo key={'CartPromo'}/>
      <CartTotalCost key={'CartTotalCost'}/>
    </div>
  );
}
