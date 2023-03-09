import {SortDirectionType, SortModifierType, SortParamsType, SortProps} from '../../types/sort-types';
import ProductSortOrderInput from '../product-sort-order-input/product-sort-order-input';
import {sortActions} from '../../store/slices/sort/slice/sort-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {DEFAULT_SORT} from '../../settings/settings';

const Direction: Record<SortModifierType, SortDirectionType> = {
  up: 'asc',
  down: 'desc',
};

export default function ProductSortOrder(props: SortProps): JSX.Element {
  const {sort, order, handleValuePick} = props;
  const dispatch = useAppDispatch();

  const handleSortClick = (modifier: SortModifierType) => {
    const params: SortParamsType = {sort: '', order: ''};
    params.order = Direction[modifier];
    params.sort = sort === '' ? DEFAULT_SORT : sort;
    handleValuePick(params);

    dispatch(sortActions.setDirection(Direction[modifier]));
  };

  return (
    <div className="catalog-sort__order">

      <ProductSortOrderInput
        modifier={'up'}
        handleOrderInputClick={handleSortClick}
        aria-label={'По возрастанию'}
        checked={Direction.up === order}
      />

      <ProductSortOrderInput
        modifier={'down'}
        handleOrderInputClick={handleSortClick}
        aria-label={'По убыванию'}
        checked={Direction.down === order}
      />

    </div>
  );
}
