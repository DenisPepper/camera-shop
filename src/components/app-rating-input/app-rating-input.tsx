import {MAX_RATING} from '../../settings/settings';
import React, {ReactNode, useState} from 'react';
import {GlobalError} from 'react-hook-form/dist/types/errors';

interface AppRatingInputProps {
  children: ReactNode;
  title: string;
  error?: GlobalError;
}

export default function AppRatingInput(props: AppRatingInputProps): JSX.Element {
  const {children, title, error} = props;
  const [value, setValue] = useState('0');

  const handleOnRatingInputChange = (evt: React.MouseEvent<HTMLFieldSetElement>) => {
    // eslint-disable-next-line no-console
    const input = evt.target as HTMLInputElement;
    setValue(() => input.value);
  };

  return (
    <fieldset
      className="rate form-review__item is-invalid"
      onChange={handleOnRatingInputChange}
      data-testid={'rating-input'}
    >
      <legend className="rate__caption">
        {title}
        <svg width="9" height="9" aria-hidden="true">
          <use xlinkHref="#icon-snowflake"></use>
        </svg>
      </legend>
      <div className="rate__bar">
        {children}
        <div className="rate__progress">
          <span className="rate__stars">{value}</span>
          <span>/</span>
          <span className="rate__all-stars">{MAX_RATING}</span>
        </div>
      </div>
      <p className="rate__message">{error?.message}</p>
    </fieldset>
  );
}
