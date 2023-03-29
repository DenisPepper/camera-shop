import {formatPrice} from '../../lib/format-price/format-price';
import {CartProductType} from '../../types/cart-types';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {postOrder} from '../../services/post-order/post-order';
import {useNavigate} from 'react-router-dom';
import {Path as to} from '../../settings/settings';

interface CartAmountProps {
  products: CartProductType[];
  discount: number;
}

export default function CartAmount(props: CartAmountProps): JSX.Element {
  const {discount, products} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cost = products.reduce((sum, product) => sum + product.price * product.count, 0);
  const discountAmount = cost * discount / 100;
  const finalCost = cost - discountAmount;

  const handleButtonClick = () => {
    dispatch(postOrder(
      {
        callWhenRejected: () => navigate(`/${to.CartError}`)
      }
    ));
  };

  return (
    <div className="basket__summary-order">

      <p className="basket__summary-item">
        <span className="basket__summary-text">Всего:</span>
        <span className="basket__summary-value">{formatPrice(cost)} ₽</span>
      </p>

      <p className="basket__summary-item">
        <span className="basket__summary-text">Скидка:</span>
        <span
          className={`basket__summary-value ${discount ? 'basket__summary-value basket__summary-value--bonus' : ''}`}
        >
          {formatPrice(discountAmount)} ₽
        </span>
      </p>

      <p className="basket__summary-item">
        <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
        <span className="basket__summary-value basket__summary-value--total">{formatPrice(finalCost)} ₽</span>
      </p>

      <button
        className="btn btn--purple"
        type="button"
        onClick={handleButtonClick}
      >
        Оформить заказ
      </button>
    </div>
  );
}
