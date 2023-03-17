import {LevelType} from '../../types/filter-types';
import FilterLevelInput from '../filter-level-input/filter-level-input';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';

interface FilterLevelProps {
  navigateToDefaultPage: () => void;
}

export default function FilterLevel(props: FilterLevelProps): JSX.Element {
  const {navigateToDefaultPage} = props;
  const dispatch = useAppDispatch();

  const handleLevelChange = (level: LevelType, checked: boolean) => {
    if (checked) {
      dispatch(actions.addLevel(level));
    } else {
      dispatch(actions.removeLevel(level));
    }
    navigateToDefaultPage();
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
