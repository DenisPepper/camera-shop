import {formatPrice} from '../../lib/format-price/format-price';

interface ProductPriceProps {
  className: string;
  price: number;
}

export default function ProductPrice(props: ProductPriceProps): JSX.Element {
  const {className, price} = props;

  return (
    <p className={className}>
      <span className="visually-hidden">Цена:</span>
      {formatPrice(price)} ₽
    </p>
  );
}
