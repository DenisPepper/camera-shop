import {SortType} from '../../types/sort-types';
import ProductSortTypeInput from '../product-sort-type-input/product-sort-type-input';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {sortActions} from '../../store/slices/sort/slice/sort-slice';

export default function ProductSortTarget(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSortTargetClick = (sort: SortType) => {
    dispatch(sortActions.setSort(sort));
  };

  return (
    <div className="catalog-sort__type">

      <ProductSortTypeInput
        target={'price'}
        handleSortTargetClick={handleSortTargetClick}
      />

      <ProductSortTypeInput
        target={'rating'}
        handleSortTargetClick={handleSortTargetClick}
      />

    </div>
  );
}
