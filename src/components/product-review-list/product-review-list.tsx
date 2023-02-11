import {ReviewType} from '../../types/review-type';
import ProductReviewCard from '../product-review-card/product-review-card';

interface ProductReviewListProps {
  reviews: ReviewType[];
}

export default function ProductReviewList(props: ProductReviewListProps): JSX.Element {
  const {reviews} = props;

  return (
    <ul className={'review-block__list'}>
      {reviews.map((review) => <ProductReviewCard key={review.id} review={review}/>)}
    </ul>
  );
}
