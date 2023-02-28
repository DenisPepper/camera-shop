import './style.css';

interface ProductSimilarButtonProps {
  modifier: '--prev' | '--next';
  isDisabled: boolean;
  callback: (modifier: string) => void;
}

const AriaLabelText = {
  '--prev': 'Предыдущий слайд',
  '--next': 'Следующий слайд'
};

export default function ProductSimilarButton(props: ProductSimilarButtonProps): JSX.Element {
  const {isDisabled, modifier, callback} = props;

  return (
    <button
      className={`slider-controls slider-controls${modifier}`}
      type="button"
      aria-label={AriaLabelText[modifier]}
      disabled = {isDisabled}
      onClick={() => callback(modifier)}
    >
      <svg width="7" height="12" aria-hidden="true">
        <use xlinkHref="#icon-arrow"></use>
      </svg>
    </button>
  );
}
