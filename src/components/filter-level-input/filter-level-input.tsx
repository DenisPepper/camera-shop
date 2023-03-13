import {ProductLevel} from '../../types/filter-types';


const levels: Record<ProductLevel, string> = {
  zero: 'Нулевой',
  professional: 'Профессиональный',
  'non-professional': 'Любительский',
};

interface FilterLevelInputProps {
  level: ProductLevel;
  handleLevelChange: (level: ProductLevel) => void;
}

export default function FilterLevelInput(props: FilterLevelInputProps): JSX.Element {
  const {level, handleLevelChange} = props;

  const handleInputChange = () => {
    handleLevelChange(level);
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
