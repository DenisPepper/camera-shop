import React from 'react';
import {debounce} from '../../lib/debounce/debounce';

interface HeaderSearchInputProps {
  handleFormInput: (value: string) => void;
}

export default function HeaderSearchInput(props: HeaderSearchInputProps): JSX.Element {
  const {handleFormInput} = props;

  const handleInputChange = debounce(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      handleFormInput(evt.target.value);
    });

  return (
    <label>
      <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-lens"></use>
      </svg>
      <input
        className="form-search__input"
        type="text"
        autoComplete="off"
        placeholder="Поиск по сайту"
        onChange={handleInputChange}
      />
    </label>
  );
}
