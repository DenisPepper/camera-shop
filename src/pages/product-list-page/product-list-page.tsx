import Pagination from '../../components/pagination/pagination';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {DECIMAL, DEFAULT_PAGE_NUMBER} from '../../settings/settings';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import ProductList from '../../components/product-list/product-list';
import Sort from '../../components/sort/sort';
import Filter from '../../components/filter/filter';
import {shallowEqual, useSelector} from 'react-redux';
import {getTotalPagesCount} from '../../store/slices/product/selectors/total-pages-count/total-pages-count';
import {fetchProducts} from '../../services/fetch-products/fetch-products';
import {getURL} from '../../api/server-url';

const COUNT_WITHOUT_PAGINATION = 1;

export default function ProductListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const totalPagesCount = useSelector(getTotalPagesCount, shallowEqual);

  const {page} = useParams();
  const pageNumber = parseInt(page || DEFAULT_PAGE_NUMBER, DECIMAL);
  /*
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') as SortType || '';
  const order = searchParams.get('order') as SortDirectionType || '';
  const priceGte = Number(searchParams.get(FilterPriceParams.GreaterThan)) || 0;
  const priceLte = Number(searchParams.get(FilterPriceParams.LessThan)) || 0;
  */

  useEffect(() => {
    const url: string = getURL({
      pageNumber: pageNumber,
    });
    dispatch(fetchProducts({url}));
  }, [pageNumber, dispatch]);

  return (
    <>
      <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
      <div className={'page-content__columns'}>

        <Filter key={'Filter'}/>

        {totalPagesCount >= pageNumber &&

          <div className={'catalog__content'}>

            <Sort key={'ProductSort'}/>

            <ProductList key={'ProductList'}/>

            {totalPagesCount > COUNT_WITHOUT_PAGINATION &&
              <Pagination
                key={'Pagination'}
                totalPagesCount={totalPagesCount}
                currentPage={pageNumber}
                pageNumbers={Array.from({length: totalPagesCount}, (_, i) => i + 1)}
              />}

          </div>}

      </div>
    </>
  );
}
