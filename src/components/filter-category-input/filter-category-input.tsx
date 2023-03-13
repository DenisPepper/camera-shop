import {ProductCategory} from '../../types/filter-types';

const categories: Record<ProductCategory, string> = {
  videocamera: 'Видеокамера',
  photocamera: 'Фотокамера',
};

interface FilterCategoryInputProps {
  category: ProductCategory;
  isChecked: boolean;
  handleCategoryInput: (categoty: ProductCategory) => void;
}

export default function FilterCategoryInput(props: FilterCategoryInputProps): JSX.Element {
  const {category, isChecked, handleCategoryInput} = props;

  const handleInputChange = () => {
    handleCategoryInput(category);
  };

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          type="checkbox"
          name={category}
          checked={isChecked}
          onChange={handleInputChange}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{categories[category]}</span>
      </label>
    </div>
  );
}
