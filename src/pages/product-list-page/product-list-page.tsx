import Pagination from '../../components/pagination/pagination';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {DECIMAL} from '../../settings/settings';
import {productActions} from '../../store/slices/product/slice/product-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import ProductList from '../../components/product-list/product-list';
import ProductSort from '../../components/product-sort/product-sort';
import {fetchProducts} from './services/fetch-products/fetch-products';
import Filter from '../../components/filter/filter';

export default function ProductListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {page = '1'} = useParams();
  const pageNumber = parseInt(page, DECIMAL);
  const [totalPagesCount, setTotalPagesCount] = useState(0);

  useEffect(() => {
    fetchProducts(pageNumber)
      .then((data) => {
        const {totalCount, products} = data;
        setTotalPagesCount(totalCount);
        dispatch(productActions.setProducts(products));
      });
  }, [pageNumber, dispatch]);

  return (
    <>
      <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
      <div className={'page-content__columns'}>
        <Filter />

        {totalPagesCount >= pageNumber &&
          <div className={'catalog__content'}>
            <ProductSort key={'ProductSort'}/>

            <ProductList key={'ProductList'}/>

            <Pagination
              key={'Pagination'}
              totalPagesCount={totalPagesCount}
              currentPage={pageNumber}
              pageNumbers={Array.from({length: totalPagesCount}, (_, i) => i + 1)}
            />

          </div>}
      </div>
    </>
  );
}
