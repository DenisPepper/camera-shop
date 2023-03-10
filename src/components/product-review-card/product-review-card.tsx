import {ReviewType} from '../../types/review-type';
import ProductRating from '../product-rating/product-rating';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

interface ProductReviewCardProps {
  review: ReviewType;
}

export default function ProductReviewCard(props: ProductReviewCardProps): JSX.Element {
  const {review} = props;

  return (
    <li className={'review-card'}>
      <div className={'review-card__head'}>
        <p className="title title--h4">{review.userName}</p>
        <time
          className="review-card__data"
          dateTime={review.createAt}
        >
          {dayjs(review.createAt).locale('ru').format('DD MMMM')}
        </time>
      </div>

      <ProductRating className={'rate review-card__rate'} rating={review.rating}/>

      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>
  );
}
