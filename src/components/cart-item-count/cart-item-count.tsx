import React, {useLayoutEffect, useRef, useState} from 'react';
import {cartActions} from '../../store/slices/cart/slice/cart-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';

const MAX_CART_COUNT = 99;
const MIN_CART_COUNT = 1;
const isValid = (value: number) => value >= MIN_CART_COUNT && value <= MAX_CART_COUNT;

interface CartItemCountProps {
  id: number;
  count: number;
  handleCountChange: (count: number) => void;
}

export default function CartItemCount(props: CartItemCountProps): JSX.Element {
  const {count: itemCount, id, handleCountChange} = props;
  const [count, setCount] = useState(itemCount);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = count.toString();
    }
  }, [count]);

  const handleInputBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    if (isValid(value)) {
      setCount(value);
      dispatch(cartActions.updateCount({id, count: value}));
      handleCountChange(value);
    } else {
      evt.target.value = count.toString();
    }
  };

  const handleDecrement = () => {
    if (isValid(count - 1)) {
      setCount((prevState) => prevState - 1);
      dispatch(cartActions.updateCount({id, count: count - 1}));
      handleCountChange(count - 1);
    }
  };

  const handleIncrement = () => {
    if (isValid(count + 1)) {
      setCount((prevState) => prevState + 1);
      dispatch(cartActions.updateCount({id, count: count + 1}));
      handleCountChange(count + 1);
    }
  };

  return (
    <div className="quantity" data-testid={'quantity'}>

      <button
        className="btn-icon btn-icon--prev"
        aria-label="уменьшить количество товара"
        onClick={handleDecrement}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>

      <label className="visually-hidden" htmlFor="counter1"></label>
      <input
        ref={inputRef}
        type="number"
        id="counter1"
        aria-label="количество товара"
        onBlur={handleInputBlur}
        title={'от 1 до 99'}
      />

      <button
        className="btn-icon btn-icon--next"
        aria-label="увеличить количество товара"
        onClick={handleIncrement}
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>

    </div>
  );
}
