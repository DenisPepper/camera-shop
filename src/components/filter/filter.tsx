import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterGroup from '../filter-group/filter-group';
import FilterLevel from '../filter-level/filter-level';
import {Dispatch, SetStateAction, useRef} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';

export default function Filter(): JSX.Element {
  const resetHandlersRef = useRef<Dispatch<SetStateAction<string>>[]>([]);
  const dispatch = useAppDispatch();

  const resetStyles = () => {
    resetHandlersRef.current?.forEach((resetStyleHandler) => resetStyleHandler(''));
  };

  const clearAllFilters = () => {
    dispatch(actions.clearAllFilters());
  };

  const handleFilterReset = () => {
    resetStyles();
    clearAllFilters();
  };

  return (
    <div className={'catalog__aside'}>
      <div className="catalog-filter">
        <form onReset={handleFilterReset}>
          <h2 className="visually-hidden">Фильтр</h2>

          <FilterPrice key={'FilterPrice'} resetStylesHandlers={resetHandlersRef.current} />
          <FilterCategory key={'FilterCategory'} />
          <FilterGroup key={'FilterGroup'} />
          <FilterLevel key={'FilterLevel'}/>

          <button className="btn catalog-filter__reset-btn" type="reset" >
            Сбросить фильтры
          </button>

        </form>
      </div>
    </div>
  );
}
