import CartPromo from '../cart-promo/cart-promo';
import CartAmount from '../cart-amount/cart-amount';
import {shallowEqual, useSelector} from 'react-redux';
import {getProducts} from '../../store/slices/cart/selectors/get-products/get-products';
import {getDiscount} from '../../store/slices/cart/selectors/get-discount/get-discount';

export default function CartFooter(): JSX.Element | null {
  const products = useSelector(getProducts, shallowEqual);
  const discount = useSelector(getDiscount, shallowEqual);

  return (
    products.length ?
      <div className={'basket__summary'} data-testid={'basket__summary'}>
        <CartPromo key={'CartPromo'}/>
        <CartAmount
          key={'CartAmount'}
          discount={discount}
          products={products}
        />
      </div>
      :
      null);
}
