import Pagination from '../pagination/pagination';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {DECIMAL, MAX_PRODUCT_COUNT, } from '../../settings/settings';
import {getStart, PRODUCTS_URL as api} from '../../http-client/server-url';

export default function ProductList(): JSX.Element {
  const {page = ''} = useParams();
  const pageNumber = parseInt(page, DECIMAL);

  const [totalPagesCount, setTotalPagesCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${api}?_start=${getStart(pageNumber)}&_limit=${MAX_PRODUCT_COUNT}`)
      .then((response) => {
        const totalProducts = parseInt(response.headers['x-total-count'], DECIMAL);
        const totalCount = Math.ceil(totalProducts / MAX_PRODUCT_COUNT);
        setTotalPagesCount(totalCount);
      });
  }, [pageNumber]);

  return (
    <div className={'catalog__content'}>
      <div className={'catalog-sort'}>Сортировки</div>
      <div className={'cards catalog__cards'}>
        карточки товаров
      </div>
      {
        totalPagesCount > 0 &&
        <Pagination
          totalPagesCount={totalPagesCount}
          currentPage={pageNumber}
          pageNumbers={Array.from({length: totalPagesCount}, (_, i) => i + 1)}
        />
      }
    </div>
  );
}
