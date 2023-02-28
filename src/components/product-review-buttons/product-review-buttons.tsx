interface ProductReviewButtonsProps {
  onShowMoreClickHandler: () => void;
  shouldHide: boolean;
}

export default function ProductReviewButtons(props: ProductReviewButtonsProps): JSX.Element {
  const {onShowMoreClickHandler, shouldHide} = props;

  return (
    <div
      className={`review-block__buttons ${shouldHide ? 'visually-hidden' : ''}`}
      data-testid={'button-container'}
    >
      <button
        className="btn btn--purple" type="button"
        onClick={onShowMoreClickHandler}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}
