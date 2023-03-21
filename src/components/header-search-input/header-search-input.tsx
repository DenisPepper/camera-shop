import React from 'react';
import {debounce} from '../../lib/debounce/debounce';
import {SEARCH_SELECT_ITEM} from '../header-search-item/header-search-item';

interface HeaderSearchInputProps {
  handleFormInput: (value: string) => void;
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
}

export default function HeaderSearchInput(props: HeaderSearchInputProps): JSX.Element {
  const {handleFormInput, formRef} = props;

  const handleInputChange = debounce(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      handleFormInput(evt.target.value);
    });

  const handleInputKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'ArrowDown') {
      evt.preventDefault();
      const parent = formRef?.current ? formRef.current : document;
      const firstItem = parent.querySelector(`.${SEARCH_SELECT_ITEM}`) as HTMLElement;
      firstItem.focus();
    }
  };

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
        onKeyDown={handleInputKeyDown}
      />
    </label>
  );
}
