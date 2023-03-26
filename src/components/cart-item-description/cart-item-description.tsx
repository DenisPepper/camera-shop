import {formatPrice} from '../../lib/format-price/format-price';

const getPrefix = (value: string) => /фото/gi.test(value) ? 'фото' : 'видео';

interface CartItemDescriptionProps {
  name: string;
  price: number;
  vendorCode: string;
  type: string;
  level: string;
  category: string;
}

export default function CartItemDescription(props: CartItemDescriptionProps): JSX.Element {
  const {name, price, vendorCode, type, level, category} = props;

  return (
    <div className="basket-item__description">
      <p className="basket-item__title">{`${category} «${name}»`}</p>
      <ul className="basket-item__list">
        <li className="basket-item__list-item">
          <span className="basket-item__article">Артикул: </span>
          <span className="basket-item__number">{vendorCode}</span>
        </li>
        <li className="basket-item__list-item">{`${type} ${getPrefix(category)}камера`}</li>
        <li className="basket-item__list-item">{`${level} уровень`}</li>
      </ul>
      <p className="basket-item__price">
        <span className="visually-hidden">Цена:</span>{formatPrice(price)} ₽
      </p>
    </div>
  );
}
