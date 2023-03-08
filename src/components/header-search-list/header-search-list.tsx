import {ProductType} from '../../types/product-type';
import HeaderSearchItem from '../header-search-item/header-search-item';
import {useEffect} from 'react';

let elements: Element[] = [];

interface HeaderSearchListProps {
  products: ProductType[];
  handleFormPick: (id: number) => void;
}

export default function HeaderSearchList(props: HeaderSearchListProps): JSX.Element {
  const {products, handleFormPick} = props;

  const handleListClick = (evt: React.MouseEvent<HTMLUListElement>) => {
    const picked = evt.target as HTMLLIElement;
    handleFormPick(picked.value);
  };

  useEffect(() => {
    elements = [...document.querySelectorAll('.form-search__select-item')];
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
