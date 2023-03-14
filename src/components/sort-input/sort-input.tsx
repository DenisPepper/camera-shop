import {SortInputType, SortType} from '../../types/sort-types';
import {searchParamsActions} from '../../store/slices/search-params/slice/search-params-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {getSort} from '../../store/slices/search-params/selectors/get-sort/get-sort';
import {shallowEqual, useSelector} from 'react-redux';

type Sort = Exclude<SortType, ''>;

const SortInputData: Record<Sort, SortInputType> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

interface ProductSortTypeInputProps {
  sort: Sort;
}

export default function SortInput(props: ProductSortTypeInputProps): JSX.Element {
  const {sort} = props;
  const {id, label} = SortInputData[sort];
  const dispatch = useAppDispatch();
  const current = useSelector(getSort, shallowEqual);

  const handleInputChange = () => {
    dispatch(searchParamsActions.setSort(sort));
  };

  return (
    <div className="catalog-sort__btn-text">
      <input
        type="radio"
        id={id}
        name="sort"
        onChange={handleInputChange}
        checked={sort === current}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
