import {InputHTMLAttributes} from 'react';
import {SortModifierType} from '../../types/sort-types';

//type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-label'>

interface ProductSortOrderInputProps extends InputHTMLAttributes<HTMLInputElement> {
  modifier: SortModifierType;
  handleOrderInputClick: (modifier: SortModifierType) => void;
}

export default function SortOrderInput(props: ProductSortOrderInputProps): JSX.Element {
  const {modifier, handleOrderInputClick, ...restProps} = props;

  const handleInputClick = () => {
    handleOrderInputClick(modifier);
  };

  return (
    <div className={`catalog-sort__btn catalog-sort__btn--${modifier}`}>
      <input
        type="radio"
        id={modifier}
        name="sort-icon"
        onChange={handleInputClick}
        {...restProps}
      />
      <label htmlFor={modifier}>
        <svg width="16" height="14" aria-hidden="true">
          <use xlinkHref="#icon-sort"></use>
        </svg>
      </label>
    </div>
  );
}