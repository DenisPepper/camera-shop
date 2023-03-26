import {Link} from 'react-router-dom';
import {DEFAULT_PRODUCT_TAB, Path as to} from '../../settings/settings';
import React from 'react';
import CartBuyButton from '../cart-buy-button/cart-buy-button';
import {ProductType} from '../../types/product-type';

interface ProductCardButtonProps {
  product: ProductType;
}

export default function ProductCardButton(props: ProductCardButtonProps): JSX.Element {
  const {product} = props;

  return (
    <div className="product-card__buttons">
      <CartBuyButton isProductCard product={product}/>
      <Link
        className="btn btn--transparent"
        to={`/${to.Product}/${product.id}?tab=${DEFAULT_PRODUCT_TAB}`}
      >
        Подробнее
      </Link>
    </div>
  );
}
