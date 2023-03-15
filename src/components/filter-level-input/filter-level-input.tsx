import {levels, LevelType, ProductLevel} from '../../types/filter-types';
import React from 'react';

interface FilterLevelInputProps {
  level: ProductLevel;
  handleLevelChange: (level: LevelType, checked: boolean) => void;
}

export default function FilterLevelInput(props: FilterLevelInputProps): JSX.Element {
  const {level, handleLevelChange} = props;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleLevelChange(levels[level], evt.target.checked);
  };

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          type="checkbox"
          name={level}
          onChange={handleInputChange}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{levels[level]}</span>
      </label>
    </div>
  );
}
