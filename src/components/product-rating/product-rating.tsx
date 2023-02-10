import {RATING_STARS} from '../../settings/settings';

interface ProductRatingProps {
  className: string;
  rating: number;
  totalReviewCount?: number;
}

export default function ProductRating(props: ProductRatingProps): JSX.Element {
  const {className, rating, totalReviewCount} = props;

  return (
    <div className={className}>
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

      {
        !!totalReviewCount &&
        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{totalReviewCount}</p>
      }
    </div>
  );
}
