import {SortInputType, SortType} from '../../types/sort-types';
import {useSelector, shallowEqual} from 'react-redux';
import {getSort} from '../../store/slices/sort/selectors/get-sort/get-sort';

type Sort = Exclude<SortType, ''>;

const SortInputData: Record<Sort, SortInputType> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

interface ProductSortTypeInputProps {
  target: Sort;
  handleSortTargetClick: (target: SortType) => void;
}

export default function ProductSortTypeInput(props: ProductSortTypeInputProps): JSX.Element {
  const {target, handleSortTargetClick} = props;
  const {id, label} = SortInputData[target];
  const currentSort = useSelector(getSort, shallowEqual);

  const handleInputClick = () => {
    handleSortTargetClick(target);
  };

  return (
    <div className="catalog-sort__btn-text">
      <input type="radio" id={id} name="sort" onChange={handleInputClick} checked={target === currentSort}/>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
