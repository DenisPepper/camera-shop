import {ProductCategory, categories, CategoryType} from '../../types/filter-types';
import React, {forwardRef} from 'react';

interface FilterCategoryInputProps {
  category: ProductCategory;
  handleCategoryChange: (category: CategoryType, checked: boolean) => void;
}

const FilterCategoryInput = forwardRef<HTMLInputElement, FilterCategoryInputProps>
((props, ref) => {
  const {category, handleCategoryChange} = props;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleCategoryChange(categories[category], evt.currentTarget.checked);
  };

  return (
    <input
      ref={ref}
      type="checkbox"
      name={category}
      onChange={handleInputChange}
    />
  );
});

FilterCategoryInput.displayName = 'FilterCategoryInput';
export default FilterCategoryInput;
