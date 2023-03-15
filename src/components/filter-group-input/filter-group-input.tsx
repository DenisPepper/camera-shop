import {groups, ProductGroup} from '../../types/filter-types';
import {shallowEqual, useSelector} from 'react-redux';
import {getBannedGroups} from '../../store/slices/search-params/selectors/get-banned-groups/get-banned-groups';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {getGroups} from '../../store/slices/search-params/selectors/get-groups/get-groups';

interface FilterGroupInputProps {
  group: ProductGroup;
}

export default function FilterGroupInput(props: FilterGroupInputProps): JSX.Element {
  const {group} = props;
  const dispatch = useAppDispatch();
  const banned = useSelector(getBannedGroups, shallowEqual).find((bannedGroup) => groups[group] === bannedGroup);
  const current = useSelector(getGroups, shallowEqual).find((currentGroup) => groups[group] === currentGroup);

  const handleInputChange = () => {
    dispatch(actions.setGroups([groups[group]]));
  };

  return (
    <div className="custom-checkbox catalog-filter__item">
      <label>
        <input
          type="checkbox"
          checked={!!current && current !== banned}
          name={group}
          disabled={!!banned}
          onChange={handleInputChange}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{groups[group]}</span>
      </label>
    </div>
  );
}
