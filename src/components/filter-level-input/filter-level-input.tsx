import {levels, LevelType, ProductLevel} from '../../types/filter-types';
import React, {useEffect, useRef} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getLevels} from '../../store/slices/search-params/selectors/get-levels/get-levels';

interface FilterLevelInputProps {
  level: ProductLevel;
  handleLevelChange: (level: LevelType, checked: boolean) => void;
}

export default function FilterLevelInput(props: FilterLevelInputProps): JSX.Element {
  const {level, handleLevelChange} = props;
  const initial = useSelector(getLevels, shallowEqual).find((initLevel) => levels[level] === initLevel);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleLevelChange(levels[level], evt.target.checked);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = !!initial;
    }
  }, []);

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          ref={inputRef}
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
