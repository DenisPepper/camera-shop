import {MAX_RATING} from '../../settings/settings';
import {ReactNode} from 'react';
import {GlobalError} from 'react-hook-form/dist/types/errors';

interface AppRatingInputProps {
  children: ReactNode;
  title: string;
  error?: GlobalError;
}

export default function AppRatingInput(props: AppRatingInputProps): JSX.Element {
  const {children, title, error} = props;

  return (
    <fieldset className="rate form-review__item is-invalid">
      <legend className="rate__caption">
        {title}
        <svg width="9" height="9" aria-hidden="true">
          <use xlinkHref="#icon-snowflake"></use>
        </svg>
      </legend>
      <div className="rate__bar">
        {children}
        <div className="rate__progress">
          <span className="rate__stars">{0}</span>
          <span>/</span>
          <span className="rate__all-stars">{MAX_RATING}</span>
        </div>
      </div>
      <p className="rate__message">{error?.message}</p>
    </fieldset>
  );
}
