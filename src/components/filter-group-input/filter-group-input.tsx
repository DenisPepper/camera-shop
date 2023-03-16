import {groups, ProductGroup} from '../../types/filter-types';
import {shallowEqual, useSelector} from 'react-redux';
import {getBannedGroups} from '../../store/slices/search-params/selectors/get-banned-groups/get-banned-groups';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {getGroups} from '../../store/slices/search-params/selectors/get-groups/get-groups';

interface FilterGroupInputProps {
  group: ProductGroup;
}

export default function FilterGroupInput(props: FilterGroupInputProps): JSX.Element {
  const {group} = props;
  const dispatch = useAppDispatch();
  const banned = useSelector(getBannedGroups, shallowEqual).find((bannedGroup) => groups[group] === bannedGroup);
  const initial = useSelector(getGroups, shallowEqual).find((initGroup) => groups[group] === initGroup);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.checked) {
      dispatch(actions.addGroup(groups[group]));
    } else {
      dispatch(actions.removeGroup(groups[group]));
    }
  };

  useLayoutEffect(() => {
    if (inputRef.current && !!banned) {
      inputRef.current.checked = false;
    }
  }, [banned]);

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
          name={group}
          onChange={handleInputChange}
          disabled={!!banned}
        />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{groups[group]}</span>
      </label>
    </div>
  );
}
//checked={!!current && current !== banned}

