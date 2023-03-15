import {AppRouter} from '../app-router/app-router';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {useSearchParams} from 'react-router-dom';
import {SortOrderType, SortType} from '../../types/sort-types';
import {searchParamsActions as actions} from '../../store/slices/search-params/slice/search-params-slice';
import {CategoryType, GroupType} from '../../types/filter-types';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const sort: SortType = searchParams.get('sort') as SortType || '';
  const order: SortOrderType = searchParams.get('order') as SortOrderType || '';
  const minPrice: string = searchParams.get('minPrice') || '';
  const maxPrice: string = searchParams.get('maxPrice') || '';
  const category: CategoryType = searchParams.get('category') as CategoryType || '';
  const groups: GroupType[] = searchParams.getAll('group') as GroupType[] || [];

  !!groups && dispatch(actions.setGroups(groups));
  !!category && dispatch(actions.setCategory(category));
  !!sort && dispatch(actions.setSort(sort));
  !!order && dispatch(actions.setOrder(order));
  !!minPrice && dispatch(actions.setMinPrice(minPrice));
  !!maxPrice && dispatch(actions.setMaxPrice(maxPrice));

  return (
    <AppRouter/>
  );
}
