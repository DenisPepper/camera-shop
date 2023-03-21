import {searchParamsActions as actions, searchParamsReducer as reducer} from './search-params-slice';
import {SearchParamsSchema as StateSchema} from '../schema/search-params-schema';
import {SortOrderType, SortType} from '../../../../types/sort-types';
import {CategoryType, GroupType, BannedGroupType, LevelType} from '../../../../types/filter-types';
import {BANNED_GROUPS} from '../../../../settings/settings';

describe('test of search-params-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: StateSchema = {
      sort: '',
      order: '',
      minPrice: '',
      maxPrice: '',
      category: '',
      groups: [],
      bannedGroups: [],
      levels: [],
    };
    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with new expected sort', () => {
    const sort: SortType = 'price';
    const prevState: Partial<StateSchema> = {
      sort: '',
    };
    const updatedState: Partial<StateSchema> = {
      sort,
    };
    expect(reducer(prevState as StateSchema, actions.setSort(sort)))
      .toEqual(updatedState);
  });

  it('should update state with new expected sort order', () => {
    const order: SortOrderType = 'asc';
    const prevState: Partial<StateSchema> = {
      order: '',
    };
    const updatedState: Partial<StateSchema> = {
      order,
    };
    expect(reducer(prevState as StateSchema, actions.setOrder(order)))
      .toEqual(updatedState);
  });

  it('should update state with new expected min price', () => {
    const price = '1000';
    const prevState: Partial<StateSchema> = {
      minPrice: '',
    };
    const updatedState: Partial<StateSchema> = {
      minPrice: price,
    };
    expect(reducer(prevState as StateSchema, actions.setMinPrice(price)))
      .toEqual(updatedState);
  });

  it('should update state with new expected max price', () => {
    const price = '1000';
    const prevState: Partial<StateSchema> = {
      maxPrice: '',
    };
    const updatedState: Partial<StateSchema> = {
      maxPrice: price,
    };
    expect(reducer(prevState as StateSchema, actions.setMaxPrice(price)))
      .toEqual(updatedState);
  });

  it('should update state with new expected category', () => {
    const category: CategoryType = 'Фотоаппарат';
    const prevState: Partial<StateSchema> = {
      category: '',
    };
    const updatedState: Partial<StateSchema> = {
      category,
    };
    expect(reducer(prevState as StateSchema, actions.setCategory(category)))
      .toEqual(updatedState);
  });

  it('should remove expected category from state', () => {
    const prevState: Partial<StateSchema> = {
      category: 'Видеокамера',
    };
    const updatedState: Partial<StateSchema> = {
      category: '',
    };
    expect(reducer(prevState as StateSchema, actions.removeCategory()))
      .toEqual(updatedState);
  });

  it('should update state with new expected group', () => {
    const group: GroupType = 'Коллекционная';
    const prevState: Partial<StateSchema> = {
      groups: [],
    };
    const updatedState: Partial<StateSchema> = {
      groups: [group],
    };
    expect(reducer(prevState as StateSchema, actions.addGroup(group)))
      .toEqual(updatedState);
  });

  it('should remove expected group from state', () => {
    const group: GroupType = 'Коллекционная';
    const prevState: Partial<StateSchema> = {
      groups: ['Коллекционная', 'Плёночная'],
    };
    const updatedState: Partial<StateSchema> = {
      groups: ['Плёночная'],
    };
    expect(reducer(prevState as StateSchema, actions.removeGroup(group)))
      .toEqual(updatedState);
  });

  it('should update state with new expected groups', () => {
    const groups: GroupType[] = ['Коллекционная', 'Плёночная'];
    const prevState: Partial<StateSchema> = {
      groups: [],
    };
    const updatedState: Partial<StateSchema> = {
      groups,
    };
    expect(reducer(prevState as StateSchema, actions.addGroups(groups)))
      .toEqual(updatedState);
  });

  it('should remove expected groups from state', () => {
    const groups: GroupType[] = ['Коллекционная', 'Плёночная'];
    const prevState: Partial<StateSchema> = {
      groups: ['Плёночная', 'Коллекционная', 'Цифровая'],
    };
    const updatedState: Partial<StateSchema> = {
      groups: ['Цифровая'],
    };
    expect(reducer(prevState as StateSchema, actions.removeGroups(groups)))
      .toEqual(updatedState);
  });

  it('should update state with new expected banned groups', () => {
    const bannedGroups: BannedGroupType[] = BANNED_GROUPS;
    const prevState: Partial<StateSchema> = {
      bannedGroups: [],
    };
    const updatedState: Partial<StateSchema> = {
      bannedGroups,
    };
    expect(reducer(prevState as StateSchema, actions.addBannedGroups(bannedGroups)))
      .toEqual(updatedState);
  });

  it('should remove expected banned groups from state', () => {
    const prevState: Partial<StateSchema> = {
      bannedGroups: BANNED_GROUPS,
    };
    const updatedState: Partial<StateSchema> = {
      bannedGroups: [],
    };
    expect(reducer(prevState as StateSchema, actions.removeBannedGroups()))
      .toEqual(updatedState);
  });

  it('should update state with new expected level', () => {
    const level: LevelType = 'Нулевой';
    const prevState: Partial<StateSchema> = {
      levels: [],
    };
    const updatedState: Partial<StateSchema> = {
      levels: [level],
    };
    expect(reducer(prevState as StateSchema, actions.addLevel(level)))
      .toEqual(updatedState);
  });

  it('should update state with new expected levels', () => {
    const levels: LevelType[] = ['Нулевой', 'Профессиональный'];
    const prevState: Partial<StateSchema> = {
      levels: [],
    };
    const updatedState: Partial<StateSchema> = {
      levels,
    };
    expect(reducer(prevState as StateSchema, actions.addLevels(levels)))
      .toEqual(updatedState);
  });

  it('should remove expected level from state', () => {
    const level: LevelType = 'Любительский';
    const prevState: Partial<StateSchema> = {
      levels: ['Нулевой', 'Любительский'],
    };
    const updatedState: Partial<StateSchema> = {
      levels: ['Нулевой'],
    };
    expect(reducer(prevState as StateSchema, actions.removeLevel(level)))
      .toEqual(updatedState);
  });

  it('should update state with new expected values', () => {
    const prevState: Partial<StateSchema> = {
      minPrice: '5000',
      maxPrice: '10000',
      category: 'Видеокамера',
      groups: ['Коллекционная'],
      bannedGroups: ['Плёночная'],
      levels: ['Любительский'],
    };
    const updatedState: Partial<StateSchema> = {
      minPrice: '',
      maxPrice: '',
      category: '',
      groups: [],
      bannedGroups: [],
      levels: [],
    };
    expect(reducer(prevState as StateSchema, actions.clearAllFilters()))
      .toEqual(updatedState);
  });
});
