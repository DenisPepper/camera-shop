import {ProductLevel} from '../../types/filter-types';
import FilterLevelInput from '../filter-level-input/filter-level-input';


export default function FilterLevel(): JSX.Element {

  const handleLevelChange = (level: ProductLevel) => {
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>

      <FilterLevelInput
        level={'zero'}
        handleLevelChange={handleLevelChange}
      />

      <FilterLevelInput
        level={'non-professional'}
        handleLevelChange={handleLevelChange}
      />

      <FilterLevelInput
        level={'professional'}
        handleLevelChange={handleLevelChange}
      />
    </fieldset>
  );
}
