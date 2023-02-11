interface ProductReviewHeaderProps {
  onClickPostReview: () => void;
}

export default function ProductReviewHeader(props: ProductReviewHeaderProps): JSX.Element {
  const {onClickPostReview} = props;

  return (
    <div className={'page-content__headed'}>
      <h2 className="title title--h3">Отзывы</h2>
      <button
        className="btn"
        type="button"
        onClick={onClickPostReview}
      >
        Оставить свой отзыв
      </button>
    </div>
  );
}
