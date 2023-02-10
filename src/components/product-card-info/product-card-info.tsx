import ProductRating from '../product-rating/product-rating';
import ProductPrice from '../product-price/product-price';

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

      <ProductRating
        key={'ProductRating'}
        className={'rate product-card__rate'}
        rating={rating}
        totalReviewCount={reviewCount}
      />

      <p className="product-card__title">{name}</p>

      <ProductPrice
        key={'ProductPrice'}
        className={'product-card__price'}
        price={price}
      />
    </div>
  );
}
