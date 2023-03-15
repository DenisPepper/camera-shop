import FilterGroupInput from '../filter-group-input/filter-group-input';

export default function FilterGroup(): JSX.Element {

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>

      <FilterGroupInput group={'digital'} />

      <FilterGroupInput group={'film'} />

      <FilterGroupInput group={'snapshot'} />

      <FilterGroupInput group={'collection'} />

    </fieldset>
  );

}
