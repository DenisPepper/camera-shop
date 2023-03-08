import {SortInputType, SortType} from '../../types/sort-types';

type Sort = Exclude<SortType, ''>;

const SortInputData: Record<Sort, SortInputType> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

interface ProductSortTypeInputProps {
  sort: Sort;
  handleSortTargetClick: (sort: SortType) => void;
}

export default function ProductSortTypeInput(props: ProductSortTypeInputProps): JSX.Element {
  const {sort, handleSortTargetClick} = props;
  const {id, label} = SortInputData[sort];

  const handleInputClick = () => {
    handleSortTargetClick(sort);
  };

  return (
    <div className="catalog-sort__btn-text">
      <input type="radio" id={id} name="sort" onClick={handleInputClick}/>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
