import {InputHTMLAttributes, useLayoutEffect} from 'react';
import {SortDirectionType} from '../../types/sort-types';
import {useSearchParams} from 'react-router-dom';
import {searchParamsActions} from '../../store/slices/search-params/slice/search-params-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {shallowEqual, useSelector} from 'react-redux';
import {getOrder} from '../../store/slices/search-params/selectors/get-order/get-order';

const Direction: Partial<Record<SortDirectionType, string>> = {
  asc: 'up',
  desc: 'down',
};

interface ProductSortOrderInputProps extends InputHTMLAttributes<HTMLInputElement> {
  order: Exclude<SortDirectionType, ''>;
}

export default function SortOrderInput(props: ProductSortOrderInputProps): JSX.Element {
  const {order, ...restProps} = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const modifier = Direction[order] || '';
  const current = useSelector(getOrder, shallowEqual);

  const handleInputClick = () => {
    dispatch(searchParamsActions.setOrder(order));
  };

  useLayoutEffect(() => {
    const initial = searchParams.get('order') as SortDirectionType || '';
    dispatch(searchParamsActions.setOrder(initial));
  }, []);

  return (
    <div className={`catalog-sort__btn catalog-sort__btn--${modifier}`}>
      <input
        type="radio"
        id={modifier}
        name="sort-icon"
        onChange={handleInputClick}
        checked={order === current}
        {...restProps}
      />
      <label htmlFor={modifier}>
        <svg width="16" height="14" aria-hidden="true">
          <use xlinkHref="#icon-sort"></use>
        </svg>
      </label>
    </div>
  );
}
