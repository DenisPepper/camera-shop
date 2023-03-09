import ProductSortTarget from '../product-sort-target/product-sort-target';
import ProductSortOrder from '../product-sort-order/product-sort-order';
import {shallowEqual, useSelector} from 'react-redux';
import {getSort} from '../../store/slices/sort/selectors/get-sort/get-sort';
import {getSortOrder} from '../../store/slices/sort/selectors/get-sort-order/get-sort-order';
import {useSearchParams} from 'react-router-dom';
import {useCallback, useEffect} from 'react';
import {SortDirectionType, SortParamsType, SortType} from '../../types/sort-types';

export default function ProductSort(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') as SortType || '';
  const order = searchParams.get('order') as SortDirectionType || '';
  const currentSort = useSelector(getSort, shallowEqual);
  const currentOrder = useSelector(getSortOrder, shallowEqual);

  const setupQueryParams = useCallback(
    (params: SortParamsType) => setSearchParams(params),
    [setSearchParams]);

  useEffect(() => {
    if (currentSort || currentOrder) {
      setupQueryParams({sort: currentSort, order: currentOrder});
    }
  }, [currentOrder, currentSort, setSearchParams, setupQueryParams]);

  return (
    <div className={'catalog-sort'}>
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>

          <ProductSortTarget
            sort={sort}
            order={order}
            handleValuePick={setupQueryParams}
          />

          <ProductSortOrder
            sort={sort}
            order={order}
            handleValuePick={setupQueryParams}
          />

        </div>
      </form>
    </div>
  );
}
