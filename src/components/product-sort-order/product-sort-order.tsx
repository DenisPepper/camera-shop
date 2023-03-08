import {SortDirectionType, SortModifierType} from '../../types/sort-types';
import ProductSortOrderInput from '../product-sort-order-input/product-sort-order-input';
import {sortActions} from '../../store/slices/sort/slice/sort-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';

const Direction: Record<SortModifierType, SortDirectionType> = {
  up: 'asc',
  down: 'desc',
};

export default function ProductSortOrder(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSortClick = (modifier: SortModifierType) => {
    const direction = Direction[modifier];
    dispatch(sortActions.setDirection(direction));
  };

  return (
    <div className="catalog-sort__order">

      <ProductSortOrderInput
        modifier={'up'}
        handleOrderInputClick={handleSortClick}
        aria-label={'По возрастанию'}
      />

      <ProductSortOrderInput
        modifier={'down'}
        handleOrderInputClick={handleSortClick}
        aria-label={'По убыванию'}
      />

    </div>
  );
}

