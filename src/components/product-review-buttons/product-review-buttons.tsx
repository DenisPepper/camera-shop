interface ProductReviewButtonsProps {
  onClickShowMore: () => void;
  isVisible: boolean;
}

export default function ProductReviewButtons(props: ProductReviewButtonsProps): JSX.Element {
  const {onClickShowMore, isVisible} = props;

  return (
    <div className={`review-block__buttons ${isVisible ? 'visually-hidden' : ''}`}>
      <button
        className="btn btn--purple" type="button"
        onClick={onClickShowMore}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}
