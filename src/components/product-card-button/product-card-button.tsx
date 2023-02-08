import {Link} from 'react-router-dom';
import {DEFAULT_PRODUCT_TAB, Path as to} from '../../settings/settings';
import React from 'react';

interface ProductCardButtonProps {
  id: number;
}

export default function ProductCardButton(props: ProductCardButtonProps): JSX.Element {
  const {id} = props;

  return (
    <div className="product-card__buttons">
      <button
        className="btn btn--purple product-card__btn"
        type="button"
      >
        Купить
      </button>
      <Link
        className="btn btn--transparent"
        to={`/${to.Product}/${id}?tab=${DEFAULT_PRODUCT_TAB}`}
      >
        Подробнее
      </Link>
    </div>
  );
}
