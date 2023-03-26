import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {ProductType} from '../../types/product-type';

interface CartBuyButtonProps {
  isProductCard?: boolean;
  product: ProductType;
}

export default function CartBuyButton(props: CartBuyButtonProps): JSX.Element {
  const {product, isProductCard = false} = props;
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(cartActions.openAddItemPopup(product));
  };

  if (isProductCard) {
    return (
      <button
        className="btn btn--purple product-card__btn"
        type="button"
        onClick={handleButtonClick}
      >
        Купить
      </button>
    );
  }

  return (
    <button
      className="btn btn--purple"
      type="button"
      onClick={handleButtonClick}
    >
      <svg width="24" height="16" aria-hidden="true">
        <use xlinkHref="#icon-add-basket"></use>
      </svg>
      Добавить в корзину
    </button>
  );
}
