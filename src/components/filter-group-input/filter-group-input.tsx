import {ProductGroup} from '../../types/filter-types';
import {useLayoutEffect, useRef} from 'react';

const groups: Record<ProductGroup, string> = {
  collection: 'Коллекционная',
  digital: 'Цифровая',
  snapshot: 'Моментальная',
  film: 'Плёночная',
};

interface FilterGroupInputProps {
  group: ProductGroup;
  handleGroupChange: (group: ProductGroup) => void;
  isBanned?: boolean;
}

export default function FilterGroupInput(props: FilterGroupInputProps): JSX.Element {
  const {group, handleGroupChange, isBanned} = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = () => {
    handleGroupChange(group);
  };

  useLayoutEffect(() => {
    if (isBanned !== undefined && inputRef.current) {
      inputRef.current.checked = false;
    }
  }, [isBanned]);

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          type="checkbox"
          ref={inputRef}
          name={group}
          disabled={isBanned ?? false}
          onChange={handleInputChange}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{groups[group]}</span>
      </label>
    </div>
  );
}
