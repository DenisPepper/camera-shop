import SortTarget from '../sort-target/sort-target';
import SortOrder from '../sort-order/sort-order';
import {shallowEqual, useSelector} from 'react-redux';
import {getSort} from '../../store/slices/sort/selectors/get-sort/get-sort';
import {getSortOrder} from '../../store/slices/sort/selectors/get-sort-order/get-sort-order';
import {useSearchParams} from 'react-router-dom';
import {useCallback, useEffect, useLayoutEffect} from 'react';
import {SortDirectionType, SortParamsType, SortType} from '../../types/sort-types';
import {sortActions} from '../../store/slices/sort/slice/sort-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';

export default function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') as SortType || '';
  const order = searchParams.get('order') as SortDirectionType || '';
  const currentSort = useSelector(getSort, shallowEqual);
  const currentOrder = useSelector(getSortOrder, shallowEqual);

  const setupQueryParams = useCallback(
    (params: SortParamsType) => setSearchParams(params),
    [setSearchParams]);

  useLayoutEffect(() => {
    !!sort && dispatch(sortActions.setSort(sort));
    !!order && dispatch(sortActions.setDirection(order));
  }, []);

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

          <SortTarget
            sort={sort}
            order={order}
            handleValuePick={setupQueryParams}
          />

          <SortOrder
            sort={sort}
            order={order}
            handleValuePick={setupQueryParams}
          />

        </div>
      </form>
    </div>
  );
}
