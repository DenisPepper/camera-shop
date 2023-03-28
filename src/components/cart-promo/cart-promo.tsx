import React, {useRef} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {postCoupon} from '../../services/post-coupon/post-coupon';
import {shallowEqual, useSelector} from 'react-redux';
import {getDiscountIsLoading} from '../../store/slices/cart/selectors/get-discount-is-loading/get-discount-is-loading';

const MAX_PROMO_LENGTH = 25;

export default function CartPromo(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoRef = useRef<HTMLInputElement | null>(null);
  const promoIsLoading = useSelector(getDiscountIsLoading, shallowEqual);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    !!promoRef.current && dispatch(postCoupon(promoRef.current.value));
  };

  return (
    <div className="basket__promo">
      <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
      <div className="basket-form">

        <form action="#" onSubmit={handleFormSubmit}>

          <div className="custom-input">
            <label><span className="custom-input__label">Промокод</span>
              <input
                ref={promoRef}
                type="text"
                name="promo"
                maxLength={MAX_PROMO_LENGTH}
                placeholder="Введите промокод"
              />
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className="custom-input__success">Промокод принят!</p>
          </div>

          <button
            className="btn"
            type="submit"
            disabled={promoIsLoading}
          >
            Применить
          </button>

        </form>

      </div>
    </div>
  );
}
