import {InputHTMLAttributes} from 'react';
import {SortModifierType} from '../../types/sort-types';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-label'>

interface ProductSortOrderInputProps extends HTMLInputProps {
  modifier: SortModifierType;
  handleOrderInputClick: (modifier: SortModifierType) => void;

}

export default function ProductSortOrderInput(props: ProductSortOrderInputProps): JSX.Element {
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
        onClick={handleInputClick}
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
