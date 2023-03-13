import {ProductGroup} from '../../types/filter-types';
import FilterGroupInput from '../filter-group-input/filter-group-input';

interface FilterGroupProps {
  disabledGroups: Array<ProductGroup>;
}

export default function FilterGroup(props: FilterGroupProps): JSX.Element {
  const {disabledGroups} = props;

  const handleGroupChange = (group: ProductGroup) => {
    // eslint-disable-next-line no-console
    console.log();
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>

      <FilterGroupInput
        group={'digital'}
        handleGroupChange={handleGroupChange}
      />

      <FilterGroupInput
        group={'film'}
        handleGroupChange={handleGroupChange}
        isBanned={
          !!disabledGroups.find((group) => group === 'film')
        }
      />

      <FilterGroupInput
        group={'snapshot'}
        handleGroupChange={handleGroupChange}
        isBanned={
          !!disabledGroups.find((group) => group === 'snapshot')
        }
      />

      <FilterGroupInput
        group={'collection'}
        handleGroupChange={handleGroupChange}
      />

    </fieldset>
  );

}
