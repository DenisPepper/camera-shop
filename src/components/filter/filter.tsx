import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterGroup from '../filter-group/filter-group';
import FilterLevel from '../filter-level/filter-level';
import {Dispatch, SetStateAction, useRef} from 'react';

export default function Filter(): JSX.Element {
  const resetHandlersRef = useRef<Dispatch<SetStateAction<string>>[]>([]);

  const handleFilterReset = () => {
    resetHandlersRef.current?.forEach((resetStyleHandler) => resetStyleHandler(''));
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

//TODO  on form reset - reset query params in reducer
//TODO remove unused modules and functions
