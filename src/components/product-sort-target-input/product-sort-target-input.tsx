import {SortInputType, SortType} from '../../types/sort-types';

type Sort = Exclude<SortType, ''>;

const SortInputData: Record<Sort, SortInputType> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

interface ProductSortTypeInputProps {
  target: Sort;
  isChecked: boolean;
  handleSortTargetClick: (target: SortType) => void;
}

export default function ProductSortTargetInput(props: ProductSortTypeInputProps): JSX.Element {
  const {target, isChecked, handleSortTargetClick} = props;
  const {id, label} = SortInputData[target];

  const handleInputClick = () => {
    handleSortTargetClick(target);
  };

  return (
    <div className="catalog-sort__btn-text">
      <input
        type="radio"
        id={id}
        name="sort"
        onChange={handleInputClick}
        checked={isChecked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
