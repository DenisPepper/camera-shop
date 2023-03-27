import {formatPrice} from '../../lib/format-price/format-price';

interface CartItemPriceProps {
  price: number;
}

export default function CartItemPrice(props: CartItemPriceProps): JSX.Element {
  const {price} = props;

  return (
    <p className="basket-item__price">
      <span className="visually-hidden">Цена:</span>{formatPrice(price)} ₽
    </p>
  );
}
