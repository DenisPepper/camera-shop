import {ProductCategory, categories} from '../../types/filter-types';
import {getCategory} from '../../store/slices/search-params/selectors/get-category/get-category';
import {shallowEqual, useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';

interface FilterCategoryInputProps {
  category: ProductCategory;
}

export default function FilterCategoryInput(props: FilterCategoryInputProps): JSX.Element {
  const {category} = props;
  const dispatch = useAppDispatch();
  const current = useSelector(getCategory, shallowEqual);

  const handleInputChange = () => {
    dispatch(actions.setCategory(categories[category]));
  };

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          type="checkbox"
          name={category}
          checked={categories[category] === current}
          onChange={handleInputChange}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{categories[category]}</span>
      </label>
    </div>
  );
}
