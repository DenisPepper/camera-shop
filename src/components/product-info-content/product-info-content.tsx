import {ProductType} from '../../types/product-type';
import ProductRating from '../product-rating/product-rating';
import ProductPrice from '../product-price/product-price';
import ProductTabs from '../product-tabs/product-tabs';

interface ProductContentProps {
  product: ProductType;
  tab: string;
  handleInfoTabClick: (tabName: string) => void;
}

export default function ProductInfoContent(props: ProductContentProps): JSX.Element {
  const {product, tab, handleInfoTabClick} = props;

  return (
    <div className={'product__content'}>
      <h1 className="title title--h3">{product.name}</h1>

      <ProductRating
        key={'ProductRating'}
        className={'rate product__rate'}
        rating={product.rating}
        totalReviewCount={product.reviewCount}
      />

      <ProductPrice
        key={'ProductPrice'}
        className={'product__price'}
        price={product.price}
      />

      <button className="btn btn--purple" type="button">
        <svg width="24" height="16" aria-hidden="true">
          <use xlinkHref="#icon-add-basket"></use>
        </svg>
        Добавить в корзину
      </button>

      <ProductTabs
        key={'ProductTabs'}
        description={product.description}
        vendorCode={product.vendorCode}
        category={product.category}
        type={product.type}
        level={product.level}
        tab={tab}
        handleInfoTabClick={handleInfoTabClick}
      />
    </div>
  );
}
