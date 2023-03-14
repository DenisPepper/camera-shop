import SortOrderInput from '../sort-order-input/sort-order-input';
import SortInput from '../sort-input/sort-input';

export default function Sort(): JSX.Element {

  /*const setupQueryParams = useCallback(
    (params: SortParamsType) => setSearchParams(params),
    [setSearchParams]);*/

  return (
    <div className={'catalog-sort'}>
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>

          <div className="catalog-sort__type">
            <SortInput sort={'price'}/>
            <SortInput sort={'rating'}/>
          </div>

          <div className="catalog-sort__order">
            <SortOrderInput order={'asc'} aria-label={'По возрастанию'}/>
            <SortOrderInput order={'desc'} aria-label={'По убыванию'}/>
          </div>

        </div>
      </form>
    </div>
  );
}
