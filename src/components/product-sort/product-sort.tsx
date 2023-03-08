import ProductSortTarget from '../product-sort-type/product-sort-target';
import ProductSortOrder from '../product-sort-order/product-sort-order';

export default function ProductSort(): JSX.Element {
  return (
    <div className={'catalog-sort'}>
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>

          <ProductSortTarget />

          <ProductSortOrder />

        </div>
      </form>
    </div>
  );
}
