import CartItemImage from '../cart-item-image/cart-item-image';
import CartItemDescription from '../cart-item-description/cart-item-description';
import CartItemPrice from '../cart-item-price/cart-item-price';
import CartItemCount from '../cart-item-count/cart-item-count';
import {CartProductType} from '../../types/cart-types';
import {useState} from 'react';
import {formatPrice} from '../../lib/format-price/format-price';

interface CartListItemProps {
  product: CartProductType;
}

export default function CartListItem(props: CartListItemProps): JSX.Element {
  const {product} = props;
  const [totalPrice, setTotalPrice] = useState(product.price * product.count);

  const handleCountChange = (count: number) => {
    setTotalPrice(product.price * count);
  };

  return (
    <li className="basket-item">

      <CartItemImage
        key={'CartItemImage'}
        name={product.name}
        previewImg={product.previewImg}
        previewImg2x={product.previewImg2x}
        previewImgWebp={product.previewImgWebp}
        previewImgWebp2x={product.previewImgWebp2x}
      />

      <CartItemDescription
        key={'CartItemDescription'}
        name={product.name}
        type={product.type}
        category={product.category}
        level={product.level}
        vendorCode={product.vendorCode}
      />

      <CartItemPrice key={'CartItemPrice'} price={product.price}/>

      <CartItemCount
        key={'CartItemCount'}
        count={product.count}
        id={product.id}
        handleCountChange={handleCountChange}
      />

      <div
        className="basket-item__total-price"
      >
        <span className="visually-hidden">Общая цена:</span>{formatPrice(totalPrice)} ₽
      </div>

      <button className="cross-btn" type="button" aria-label="Удалить товар">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>

    </li>
  );
}

