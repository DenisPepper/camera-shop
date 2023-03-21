export const SEARCH_SELECT_ITEM = 'form-search__select-item';

interface HeaderSearchItemProps {
  id: number;
  name: string;
}

export default function HeaderSearchItem(props: HeaderSearchItemProps): JSX.Element {
  const {id, name} = props;

  return (
    <li
      className={SEARCH_SELECT_ITEM}
      value={id}
      tabIndex={0}
    >
      {name}
    </li>
  );
}
