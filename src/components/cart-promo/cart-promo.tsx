import React, {useLayoutEffect, useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {postCoupon} from '../../services/post-coupon/post-coupon';
import {shallowEqual, useSelector} from 'react-redux';
import {getDiscountIsLoading} from '../../store/slices/cart/selectors/get-discount-is-loading/get-discount-is-loading';
import {debounce} from '../../lib/debounce/debounce';
import {
  getDiscountResponseStatus
} from '../../store/slices/cart/selectors/get-discount-response-status/get-discount-response-status';
import {getCoupon} from '../../store/slices/cart/selectors/get-coupon/get-coupon';

const MAX_PROMO_LENGTH = 25;

const Modifiers = {
  Valid: 'is-valid',
  Invalid: 'is-invalid',
  Default: '',
} as const;

export default function CartPromo(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoRef = useRef<HTMLInputElement | null>(null);
  const promoIsLoading = useSelector(getDiscountIsLoading, shallowEqual);
  const coupon = useSelector(getCoupon, shallowEqual);
  const discountResponse = useSelector(getDiscountResponseStatus, shallowEqual);
  const [shouldRenderRequired, setShouldRenderRequired] = useState(false);
  const [modifier, setModifier] = useState<string>(Modifiers.Default);

  const isPromoValid = (value: string) => {
    setShouldRenderRequired(value === '');
    if (/\s/g.test(value) || value === '') {
      setModifier(Modifiers.Invalid);
    }
    return !/\s/g.test(value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (promoRef.current
      && isPromoValid(promoRef.current.value)
      && promoRef.current.value !== coupon) {
      dispatch(postCoupon(promoRef.current.value));
    }
  };

  const handleInputChange = debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
    setModifier(Modifiers.Default);
    setShouldRenderRequired(evt.target.value === '');
  });

  const handleInputBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    setShouldRenderRequired(false);
  };

  useLayoutEffect(() => {
    if (discountResponse === '') {
      return;
    }
    coupon === 'OK' ? setModifier(Modifiers.Valid) : setModifier(Modifiers.Invalid);
  }, [discountResponse]);

  useLayoutEffect(() => {
    if (promoRef.current && coupon) {
      promoRef.current.value = coupon;
      setModifier(Modifiers.Valid);
    }
  }, [coupon]);

  return (
    <div className="basket__promo">
      <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
      <div className="basket-form">

        <form action="#" autoComplete={'off'} onSubmit={handleFormSubmit}>

          <div className={`custom-input ${modifier}`}>
            <label>
              <span
                className="custom-input__label"
              >
                Промокод
                {
                  shouldRenderRequired &&
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                }
              </span>
              <input
                ref={promoRef}
                type="text"
                name="promo"
                maxLength={MAX_PROMO_LENGTH}
                placeholder="Введите промокод"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
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

