import {ProductType} from '../../types/product-type';
import ProductRating from '../product-rating/product-rating';
import ProductPrice from '../product-price/product-price';
import ProductTabs from '../product-tabs/product-tabs';

interface ProductContentProps {
  product: ProductType;
  tab: string;
  onTabClickHandler: (tabName: string) => void;
}

export default function ProductInfoContent(props: ProductContentProps): JSX.Element {
  const {product: p, tab, onTabClickHandler} = props;

  return (
    <div className={'product__content'}>
      <h1 className="title title--h3">{p.name}</h1>

      <ProductRating
        key={'ProductRating'}
        className={'rate product__rate'}
        rating={p.rating}
        totalReviewCount={p.reviewCount}
      />

      <ProductPrice
        key={'ProductPrice'}
        className={'product__price'}
        price={p.price}
      />

      <button className="btn btn--purple" type="button">
        <svg width="24" height="16" aria-hidden="true">
          <use xlinkHref="#icon-add-basket"></use>
        </svg>
        Добавить в корзину
      </button>

      <ProductTabs
        key={'ProductTabs'}
        description={p.description}
        vendorCode={p.vendorCode}
        category={p.category}
        type={p.type}
        level={p.level}
        tab={tab}
        onTabClickHandler={onTabClickHandler}
      />
    </div>
  );
}
