import {DECIMAL, DEFAULT_PAGE_NUMBER, WINDOW_SCROLL_TO_TOP_CORD as TOP} from '../../settings/settings';
import PaginationButton from '../pagination-button/pagination-button';
import PaginationTextButton from '../pagination-text-button/pagination-text-button';

interface PaginationProps {
  pageNumbers?: number[];
  totalPagesCount: number;
  currentPage: number;
}

const FIRST_PAGE = parseInt(DEFAULT_PAGE_NUMBER, DECIMAL);

export default function Pagination(props: PaginationProps): JSX.Element {
  const {
    pageNumbers: numbers = [],
    totalPagesCount: totalPages,
    currentPage,
  } = props;

  const handleLinkClick = () => {
    window.scrollTo({ top: TOP,});
  };

  return (
    <div className={'pagination'}>
      <ul className={'pagination__list'}>
        {
          currentPage > FIRST_PAGE &&
          <PaginationTextButton
            text={'Назад'}
            currentPage={currentPage}
            handleLinkClick={handleLinkClick}
          />
        }

        {
          numbers.map((number) => (
            <PaginationButton
              key={number}
              page={number}
              currentPage={currentPage}
              handleLinkClick={handleLinkClick}
            />))
        }

        {
          currentPage < totalPages &&
          <PaginationTextButton
            text={'Далее'}
            currentPage={currentPage}
            handleLinkClick={handleLinkClick}
          />
        }
      </ul>
    </div>
  );
}
