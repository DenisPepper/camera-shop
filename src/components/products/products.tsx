import Pagination from '../pagination/pagination';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {DECIMAL, MAX_PRODUCT_COUNT,} from '../../settings/settings';
import {getStart, PRODUCTS_URL as api} from '../../http-client/server-url';
import {productActions} from '../../store/slices/product/slice/product-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {ProductType} from '../../types/product-type';
import ProductList from '../product-list/product-list';
import ProductSort from '../product-sort/product-sort';

export default function Products(): JSX.Element {
  const dispatch = useAppDispatch();
  const {page = ''} = useParams();
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
    <div className={'catalog__content'}>
      <ProductSort key={'ProductSort'}/>

      <ProductList key={'ProductList'}/>

      {
        totalPagesCount > 0 &&
        <Pagination
          key={'Pagination'}
          totalPagesCount={totalPagesCount}
          currentPage={pageNumber}
          pageNumbers={Array.from({length: totalPagesCount}, (_, i) => i + 1)}
        />
      }
    </div>
  );
}
