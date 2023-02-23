interface ProductReviewButtonsProps {
  onClickShowMore: () => void;
  shouldHide: boolean;
}

export default function ProductReviewButtons(props: ProductReviewButtonsProps): JSX.Element {
  const {onClickShowMore, shouldHide} = props;

  return (
    <div
      className={`review-block__buttons ${shouldHide ? 'visually-hidden' : ''}`}
      data-testid={'button-container'}
    >
      <button
        className="btn btn--purple" type="button"
        onClick={onClickShowMore}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}
