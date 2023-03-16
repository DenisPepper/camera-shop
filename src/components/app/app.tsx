import {AppRouter} from '../app-router/app-router';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {useSearchParams} from 'react-router-dom';
import {SortOrderType, SortType} from '../../types/sort-types';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {CategoryType, GroupType, LevelType} from '../../types/filter-types';
import {useLayoutEffect, useState} from 'react';

export function App(): JSX.Element {
  const [usedInitialSearchParams, setUsedInitialSearchParams] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const sort: SortType = searchParams.get('sort') as SortType || '';
  const order: SortOrderType = searchParams.get('order') as SortOrderType || '';
  const minPrice: string = searchParams.get('minPrice') || '';
  const maxPrice: string = searchParams.get('maxPrice') || '';
  const category: CategoryType = searchParams.get('category') as CategoryType || '';
  const groups: GroupType[] = searchParams.getAll('groups') as GroupType[] || [];
  const levels: LevelType[] = searchParams.getAll('levels') as LevelType[] || [];

  useLayoutEffect(() => {
    if (!usedInitialSearchParams) {
      levels.length > 0 && dispatch(actions.addLevels(levels));
      groups.length > 0 && dispatch(actions.addGroups(groups));
      !!category && dispatch(actions.setCategory(category));
      !!sort && dispatch(actions.setSort(sort));
      !!order && dispatch(actions.setOrder(order));
      !!minPrice && dispatch(actions.setMinPrice(minPrice));
      !!maxPrice && dispatch(actions.setMaxPrice(maxPrice));
      setUsedInitialSearchParams(true);
    }
  }, [usedInitialSearchParams]);

  return usedInitialSearchParams ?
    <AppRouter/>
    :
    <div className={'wrapper'} data-testid={'empty-app-layout'}/>;
}
