import {Path as to} from '../../settings/settings';
import {Link} from 'react-router-dom';
import React from 'react';

export default function ProductCartLink(): JSX.Element {
  return (
    <Link
      className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
      to={`/${to.Cart}`}
    >
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      В корзине
    </Link>
  );
}
