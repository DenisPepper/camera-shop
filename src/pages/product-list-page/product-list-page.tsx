import Pagination from '../../components/pagination/pagination';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {DECIMAL, MAX_PRODUCT_COUNT} from '../../settings/settings';
import {getStart, PRODUCTS_URL as api} from '../../api/server-url';
import {productActions} from '../../store/slices/product/slice/product-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {ProductType} from '../../types/product-type';
import ProductList from '../../components/product-list/product-list';
import ProductSort from '../../components/product-sort/product-sort';

export default function ProductListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {page = '1'} = useParams();
  const pageNumber = parseInt(page, DECIMAL);
  const [totalPagesCount, setTotalPagesCount] = useState(0);

  useEffect(() => {
    axios
      .get<ProductType[]>(`${api}?_start=${getStart(pageNumber)}&_limit=${MAX_PRODUCT_COUNT}`)
      .then((response) => {
        const totalProducts = parseInt(response.headers['x-total-count'] || '', DECIMAL);
        const totalCount = Math.ceil(totalProducts / MAX_PRODUCT_COUNT);
        setTotalPagesCount(totalCount);
        dispatch(productActions.setProducts(response.data));
      });
  }, [pageNumber, dispatch]);

  return (
    <>
      <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
      <div className={'page-content__columns'}>
        <div className={'catalog__aside'}>Фильтр</div>

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
