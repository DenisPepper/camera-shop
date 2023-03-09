import {SortType, SortParamsType, SortProps} from '../../types/sort-types';
import ProductSortTargetInput from '../product-sort-target-input/product-sort-target-input';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {sortActions} from '../../store/slices/sort/slice/sort-slice';
import {DEFAULT_SORT_DIRECTION} from '../../settings/settings';

export default function ProductSortTarget(props: SortProps): JSX.Element {
  const {sort, order, handleValuePick} = props;
  const dispatch = useAppDispatch();

  const handleSortTargetClick = (target: SortType) => {
    const params: SortParamsType = {sort: '', order: ''};
    params.sort = target;
    params.order = order === '' ? DEFAULT_SORT_DIRECTION : order;
    handleValuePick(params);

    dispatch(sortActions.setSort(target));
  };

  return (
    <div className="catalog-sort__type">

      <ProductSortTargetInput
        target={'price'}
        handleSortTargetClick={handleSortTargetClick}
        isChecked={sort === 'price'}
      />

      <ProductSortTargetInput
        target={'rating'}
        handleSortTargetClick={handleSortTargetClick}
        isChecked={sort === 'rating'}
      />

    </div>
  );
}
