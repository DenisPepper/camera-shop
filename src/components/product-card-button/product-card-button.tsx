import {Link} from 'react-router-dom';
import {DEFAULT_PRODUCT_TAB, Path as to} from '../../settings/settings';
import React from 'react';
import CartBuyButton from '../cart-buy-button/cart-buy-button';
import {ProductType} from '../../types/product-type';
import {getItems} from '../../store/slices/cart/selectors/get-items/get-items';
import {shallowEqual, useSelector} from 'react-redux';
import ProductCartLink from '../product-cart-link/product-cart-link';

interface ProductCardButtonProps {
  product: ProductType;
}

export default function ProductCardButton(props: ProductCardButtonProps): JSX.Element {
  const {product} = props;
  const cartItems = useSelector(getItems, shallowEqual);
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-card__buttons">

      {
        inCart ?
          <ProductCartLink/>
          :
          <CartBuyButton isProductCard product={product}/>
      }

      <Link
        className="btn btn--transparent"
        to={`/${to.Product}/${product.id}?tab=${DEFAULT_PRODUCT_TAB}`}
      >
        Подробнее
      </Link>
    </div>
  );
}
