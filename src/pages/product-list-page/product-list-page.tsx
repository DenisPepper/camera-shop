import Pagination from '../../components/pagination/pagination';
import React, {useCallback, useLayoutEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {DECIMAL, DEFAULT_PAGE_NUMBER} from '../../settings/settings';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import ProductList from '../../components/product-list/product-list';
import Sort from '../../components/sort/sort';
import Filter from '../../components/filter/filter';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalPagesCount} from '../../store/slices/product/selectors/total-pages-count/total-pages-count';
import {fetchProducts} from '../../services/fetch-products/fetch-products';
import {getUrlWithSearchParams} from '../../api/server-url';
import {getSort} from '../../store/slices/search-params/selectors/get-sort/get-sort';
import {getOrder} from '../../store/slices/search-params/selectors/get-order/get-order';
import {SearchParamsSchema} from '../../store/slices/search-params/schema/search-params-schema';
import {getMinPrice} from '../../store/slices/search-params/selectors/get-min-price/get-min-price';
import {getMaxPrice} from '../../store/slices/search-params/selectors/get-max-price/get-max-price';
import {getCategory} from '../../store/slices/search-params/selectors/get-category/get-category';
import {getGroups} from '../../store/slices/search-params/selectors/get-groups/get-groups';
import {getLevels} from '../../store/slices/search-params/selectors/get-levels/get-levels';
import {AppSpinner} from '../../components/app-spinner/app-spinner';
import {getLoadingStatus} from '../../store/slices/product/selectors/get-loading-status/get-loading-status';

const COUNT_WITHOUT_PAGINATION = 1;

type SearchParams = Partial<Omit<SearchParamsSchema, 'bannedGroups'>>;

export default function ProductListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getLoadingStatus, shallowEqual);
  const [, setSearchParams] = useSearchParams();
  const {page} = useParams();
  const pageNumber = parseInt(page || DEFAULT_PAGE_NUMBER, DECIMAL);
  const totalPagesCount = useSelector(getTotalPagesCount, shallowEqual);
  const sort = useSelector(getSort, shallowEqual);
  const order = useSelector(getOrder, shallowEqual);
  const minPrice = useSelector(getMinPrice, shallowEqual);
  const maxPrice = useSelector(getMaxPrice, shallowEqual);
  const category = useSelector(getCategory, shallowEqual);
  const groups = useSelector(getGroups, shallowEqual);
  const levels = useSelector(getLevels, shallowEqual);

  const setupSearchParams = useCallback((params: SearchParams) => {
    const updatedParams: { [key: string]: string | string[] } = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        updatedParams[key] = value;
      }
    });
    setSearchParams(updatedParams);
  }, [setSearchParams]);

  useLayoutEffect(() => {
    const searchParams: SearchParams = {
      sort, order, minPrice, maxPrice, category, groups, levels
    };
    const url: string = getUrlWithSearchParams({
      pageNumber,
      searchParams,
    });
    dispatch(fetchProducts({url}));
    setupSearchParams(searchParams);
  }, [dispatch, pageNumber, setupSearchParams, sort, order, minPrice, maxPrice, category, groups, levels]);

  return (
    <>
      <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
      <div className={'page-content__columns'}>

        <Filter key={'Filter'}/>

        <div className={'catalog__content'}>

          <Sort key={'ProductSort'}/>
          {!isLoading ? <ProductList key={'ProductList'}/> : <AppSpinner/>}

          {totalPagesCount > COUNT_WITHOUT_PAGINATION &&
            <Pagination
              key={'Pagination'}
              totalPagesCount={totalPagesCount}
              currentPage={pageNumber}
              pageNumbers={Array.from({length: totalPagesCount}, (_, i) => i + 1)}
            />}

        </div>

      </div>
    </>
  );
}
