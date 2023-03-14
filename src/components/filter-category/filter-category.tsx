import FilterCategoryInput from '../filter-category-input/filter-category-input';

export default function FilterCategory(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>

      <FilterCategoryInput category={'photocamera'} />
      <FilterCategoryInput category={'videocamera'} />

    </fieldset>
  );
}
