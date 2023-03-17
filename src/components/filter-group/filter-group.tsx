import FilterGroupInput from '../filter-group-input/filter-group-input';

interface FilterGroupProps {
  navigateToDefaultPage: () => void;
}

export default function FilterGroup(props: FilterGroupProps): JSX.Element {
  const {navigateToDefaultPage} = props;

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>

      <FilterGroupInput
        group={'digital'}
        navigateToDefaultPage={navigateToDefaultPage}
      />

      <FilterGroupInput
        group={'film'}
        navigateToDefaultPage={navigateToDefaultPage}
      />

      <FilterGroupInput
        group={'snapshot'}
        navigateToDefaultPage={navigateToDefaultPage}
      />

      <FilterGroupInput
        group={'collection'}
        navigateToDefaultPage={navigateToDefaultPage}
      />

    </fieldset>
  );

}
