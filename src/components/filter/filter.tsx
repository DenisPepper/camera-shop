import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterGroup from '../filter-group/filter-group';
import FilterLevel from '../filter-level/filter-level';
import {Dispatch, SetStateAction, useRef} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {useNavigate} from 'react-router-dom';
import {DEFAULT_PAGE_NUMBER, Path as to} from '../../settings/settings';

export default function Filter(): JSX.Element {
  const resetHandlersRef = useRef<Dispatch<SetStateAction<string>>[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToDefaultPage = () => {
    navigate(`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`);
  };

  const resetStyles = () => {
    resetHandlersRef.current?.forEach((resetStyleHandler) => resetStyleHandler(''));
  };

  const clearAllFilters = () => {
    dispatch(actions.clearAllFilters());
  };

  const handleFilterReset = () => {
    resetStyles();
    clearAllFilters();
    navigateToDefaultPage();
  };

  return (
    <div className={'catalog__aside'}>
      <div className="catalog-filter">
        <form onReset={handleFilterReset}>
          <h2 className="visually-hidden">Фильтр</h2>

          <FilterPrice
            key={'FilterPrice'}
            resetStylesHandlers={resetHandlersRef.current}
            navigateToDefaultPage={navigateToDefaultPage}
          />

          <FilterCategory
            key={'FilterCategory'}
            navigateToDefaultPage={navigateToDefaultPage}
          />

          <FilterGroup
            key={'FilterGroup'}
            navigateToDefaultPage={navigateToDefaultPage}
          />

          <FilterLevel
            key={'FilterLevel'}
            navigateToDefaultPage={navigateToDefaultPage}
          />

          <button className="btn catalog-filter__reset-btn" type="reset">
            Сбросить фильтры
          </button>

        </form>
      </div>
    </div>
  );
}
