interface ProductReviewHeaderProps {
  onPostReviewClickHandler: () => void;
}

export default function ProductReviewHeader(props: ProductReviewHeaderProps): JSX.Element {
  const {onPostReviewClickHandler} = props;

  return (
    <div className={'page-content__headed'}>
      <h2 className="title title--h3">Отзывы</h2>
      <button
        className="btn"
        type="button"
        onClick={onPostReviewClickHandler}
      >
        Оставить свой отзыв
      </button>
    </div>
  );
}

