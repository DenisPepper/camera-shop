import {ProductType} from '../../types/product-type';
import HeaderSearchItem, {SEARCH_SELECT_ITEM} from '../header-search-item/header-search-item';
import React, {useEffect} from 'react';

let elements: Element[] = [];

interface HeaderSearchListProps {
  products: ProductType[];
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  handleFormPick: (id: number) => void;
}

export default function HeaderSearchList(props: HeaderSearchListProps): JSX.Element {
  const {products, formRef, handleFormPick} = props;

  const handleListClick = (evt: React.MouseEvent<HTMLUListElement>) => {
    const picked = evt.target as HTMLLIElement;
    handleFormPick(picked.value);
  };

  useEffect(() => {
    const parent = formRef?.current ? formRef.current : document;
    elements = [...parent.querySelectorAll(`.${SEARCH_SELECT_ITEM}`)];
  });

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLUListElement>) => {
    const picked = evt.target as HTMLLIElement;
    if (evt.key === 'Enter') {
      handleFormPick(picked.value);
    }
    if (evt.key === 'ArrowUp' || evt.key === 'ArrowDown') {
      evt.preventDefault();
      setupNextFocus(evt.key === 'ArrowDown');
    }
  };

  const setupNextFocus = (increment: boolean) => {
    for (let index = 0; index < elements.length; index++) {
      if (elements[index] === document.activeElement) {
        const nextIndex = increment ? ++index : --index;
        const element = elements[nextIndex] as HTMLElement;
        element?.focus();
        break;
      }
    }
  };

  return (
    <ul
      className="form-search__select-list"
      onClick={handleListClick}
      onKeyDown={handleKeyDown}
    >
      {products.map((product) =>
        (
          <HeaderSearchItem
            key={product.id}
            id={product.id}
            name={product.name}
          />
        ))}
    </ul>
  );
}
