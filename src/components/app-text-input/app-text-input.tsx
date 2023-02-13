import {ReactNode} from 'react';
import {GlobalError} from 'react-hook-form/dist/types/errors';

interface AppInputProps {
  children: ReactNode;
  title: string;
  error?: GlobalError;
}

export default function AppTextInput(props: AppInputProps): JSX.Element {
  const {children, title, error} = props;

  return (
    <div className={`custom-input form-review__item ${error ? 'is-invalid' : ''}`}>
      <label>
        <span className="custom-input__label">
          {title}
          <svg width="9" height="9" aria-hidden="true">
            <use xlinkHref="#icon-snowflake"/>
          </svg>
        </span>
        {children}
      </label>
      <p className="custom-input__error">{error?.message}</p>
    </div>
  );
}
