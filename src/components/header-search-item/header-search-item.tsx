import {useRef} from 'react';

interface HeaderSearchItemProps {
  id: number;
  name: string;
}

export default function HeaderSearchItem(props: HeaderSearchItemProps): JSX.Element {
  const {id, name} = props;
  const itemRef = useRef<HTMLLIElement | null>(null);

  return (
    <li
      className="form-search__select-item"
      ref={itemRef}
      value={id}
      tabIndex={0}
    >
      {name}
    </li>
  );
}
