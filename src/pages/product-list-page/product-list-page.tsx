import Pagination from '../../components/pagination/pagination';
import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {DECIMAL, DEFAULT_PAGE_NUMBER, FilterPriceParams} from '../../settings/settings';
import {productActions} from '../../store/slices/product/slice/product-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import ProductList from '../../components/product-list/product-list';
import Sort from '../../components/sort/sort';
import {_fetchProducts} from '../../services/_fetch-products/_fetch-products';
import Filter from '../../components/filter/filter';
import {SortDirectionType, SortType} from '../../types/sort-types';

const COUNT_WITHOUT_PAGINATION = 1;

export default function ProductListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [searchParams] = useSearchParams();
  const {page} = useParams();
  const pageNumber = parseInt(page || DEFAULT_PAGE_NUMBER, DECIMAL);
  const sort = searchParams.get('sort') as SortType || '';
  const order = searchParams.get('order') as SortDirectionType || '';
  const priceGte = Number(searchParams.get(FilterPriceParams.GreaterThan)) || 0;
  const priceLte = Number(searchParams.get(FilterPriceParams.LessThan)) || 0;

  useEffect(() => {
    _fetchProducts({
      pageNumber,
      sorting: {sort, order},
      price: {
        [FilterPriceParams.GreaterThan]: priceGte,
        [FilterPriceParams.LessThan]: priceLte,
      }
    })
      .then((data) => {
        const {totalCount, products} = data;
        setTotalPagesCount(totalCount);
        dispatch(productActions.setProducts(products));
      });
  }, [pageNumber, dispatch, sort, order, priceGte, priceLte]);

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
