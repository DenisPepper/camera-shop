import './header-search-reset-button.css';

export default function HeaderSearchResetButton(): JSX.Element {

  return (
    <button
      className="form-search__reset form-search__reset-button"
      type="reset"
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
      <span className="visually-hidden">Сбросить поиск</span>
    </button>
  );
}
