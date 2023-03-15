import FilterCategoryInput from '../filter-category-input/filter-category-input';
import {categories, CategoryType} from '../../types/filter-types';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {useRef} from 'react';

export default function FilterCategory(): JSX.Element {
  const dispatch = useAppDispatch();
  const photoRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoCameraChange = (category: CategoryType, checked: boolean) => {
    if (checked) {
      !!videoRef.current && (videoRef.current.checked = false);
      dispatch(actions.setCategory(category));
      dispatch(actions.removeBannedGroups());
    } else {
      dispatch(actions.removeCategory());
    }
  };

  const handleVideoCameraChange = (category: CategoryType, checked: boolean) => {
    if (checked) {
      !!photoRef.current && (photoRef.current.checked = false);
      dispatch(actions.setCategory(category));
      dispatch(actions.addBannedGroups(['Моментальная', 'Плёночная']));
      dispatch(actions.removeGroups(['Моментальная', 'Плёночная']));
    } else {
      dispatch(actions.removeCategory());
      dispatch(actions.removeBannedGroups());
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>

      <div className="custom-checkbox catalog-filter__item">
        <label>
          <FilterCategoryInput
            category={'photocamera'}
            handleCategoryChange={handlePhotoCameraChange}
            ref={photoRef}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">{categories['photocamera']}</span>
        </label>
      </div>

      <div className="custom-checkbox catalog-filter__item">
        <label>
          <FilterCategoryInput
            category={'videocamera'}
            handleCategoryChange={handleVideoCameraChange}
            ref={videoRef}
          />
          <span className="custom-checkbox__icon"></span>
          <span className="custom-checkbox__label">{categories['videocamera']}</span>
        </label>
      </div>

    </fieldset>
  );
}
