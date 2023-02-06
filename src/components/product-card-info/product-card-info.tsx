import {RATING_STARS} from '../../settings/settings';

interface ProductCardInfoProps {
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
}


export default function ProductCardInfo(props: ProductCardInfoProps): JSX.Element {
  const {name, price, rating, reviewCount} = props;

  return (
    <div className="product-card__info">
      <div className="rate product-card__rate">
        {
          RATING_STARS.map(
            (number) => number <= rating ?
              <svg key={number} width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-full-star"></use>
              </svg>
              :
              <svg key={number} width="17" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
          )
        }
        <p className="visually-hidden">Рейтинг: {rating}</p>
        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
      </div>
      <p className="product-card__title">{name}</p>
      <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price}</p>
    </div>
  );
}
