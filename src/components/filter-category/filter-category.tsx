import FilterCategoryInput from '../filter-category-input/filter-category-input';
import {categories, CategoryType} from '../../types/filter-types';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {useEffect, useRef} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getCategory} from '../../store/slices/search-params/selectors/get-category/get-category';
import {BANNED_GROUPS} from '../../settings/settings';

interface FilterCategoryProps {
  navigateToDefaultPage: () => void;
}

export default function FilterCategory(props: FilterCategoryProps): JSX.Element {
  const {navigateToDefaultPage} = props;
  const dispatch = useAppDispatch();
  const initial = useSelector(getCategory,shallowEqual);
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
    navigateToDefaultPage();
  };

  const handleVideoCameraChange = (category: CategoryType, checked: boolean) => {
    if (checked) {
      !!photoRef.current && (photoRef.current.checked = false);
      dispatch(actions.setCategory(category));
      dispatch(actions.addBannedGroups(BANNED_GROUPS));
      dispatch(actions.removeGroups(BANNED_GROUPS));
    } else {
      dispatch(actions.removeCategory());
      dispatch(actions.removeBannedGroups());
    }
    navigateToDefaultPage();
  };

  useEffect(() => {
    if (photoRef.current) {
      photoRef.current.checked = categories['photocamera'] === initial;
    }
    if (videoRef.current) {
      videoRef.current.checked = categories['videocamera'] === initial;
    }
  }, []);

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
