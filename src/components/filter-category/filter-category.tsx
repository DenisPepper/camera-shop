import {useState} from 'react';
import {ProductCategory} from '../../types/filter-types';
import FilterCategoryInput from '../filter-category-input/filter-category-input';

interface FilterCategoryProps {
  handleCategoryChange: (category: ProductCategory) => void;
}

export default function FilterCategory(props: FilterCategoryProps): JSX.Element {
  const {handleCategoryChange} = props;
  const [checked, setChecked] = useState<ProductCategory | ''>(() => '');

  const handleCategoryInput = (category: ProductCategory) => {
    setChecked(category);
    handleCategoryChange(category);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>

      <FilterCategoryInput
        category={'photocamera'}
        isChecked={checked === 'photocamera'}
        handleCategoryInput={handleCategoryInput}
      />

      <FilterCategoryInput
        category={'videocamera'}
        isChecked={checked === 'videocamera'}
        handleCategoryInput={handleCategoryInput}
      />

    </fieldset>
  );
}
