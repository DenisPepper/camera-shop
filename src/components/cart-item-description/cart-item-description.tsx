import CartItemPrice from '../cart-item-price/cart-item-price';
import './cart-item-description.css';

const getPrefix = (value: string) => /фото/gi.test(value) ? 'фото' : 'видео';

interface CartItemDescriptionProps {
  name: string;
  vendorCode: string;
  type: string;
  level: string;
  category: string;
  price?: number;
}

export default function CartItemDescription(props: CartItemDescriptionProps): JSX.Element {
  const {name, vendorCode, type, level, category, price} = props;

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
      {!!price && <CartItemPrice price={price}/>}
    </div>
  );
}
