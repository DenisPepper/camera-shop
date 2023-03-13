import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterGroup from '../filter-group/filter-group';
import FilterLevel from '../filter-level/filter-level';
import {ProductCategory, ProductGroup} from '../../types/filter-types';
import {Dispatch, SetStateAction, useRef, useState} from 'react';

export default function Filter(): JSX.Element {
  const [disabledGroups, setDisabledGroups] = useState<ProductGroup[]>([]);
  const resetHandlersRef = useRef<Dispatch<SetStateAction<string>>[]>([]);

  const handleCategoryChange = (category: ProductCategory) => {
    let groups: ProductGroup[] = [];
    switch (category) {
      case 'videocamera':
        groups = ['snapshot', 'film'];
        break;
    }
    setDisabledGroups(groups);
  };

  const handleFilterReset = () => {
    setDisabledGroups([]);
    resetHandlersRef.current?.forEach((resetStyleHandler) => resetStyleHandler(''));
  };

  return (
    <div className={'catalog__aside'}>
      <div className="catalog-filter">

        <form onReset={handleFilterReset}>

          <h2 className="visually-hidden">Фильтр</h2>

          <FilterPrice
            key={'FilterPrice'}
            resetStylesHandlers={resetHandlersRef.current}
          />

          <FilterCategory
            key={'FilterCategory'}
            handleCategoryChange={handleCategoryChange}
          />

          <FilterGroup
            key={'FilterGroup'}
            disabledGroups={disabledGroups}
          />

          <FilterLevel key={'FilterLevel'}/>

          <button
            className="btn catalog-filter__reset-btn"
            type="reset"
          >
            Сбросить фильтры
          </button>

        </form>

      </div>
    </div>
  );
}

//TODO  on form reset
// - reset css modifiers in FilterPrice FC
// - reset query params in reducer
