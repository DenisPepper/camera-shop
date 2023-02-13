import {GlobalError} from 'react-hook-form/dist/types/errors';
import {ReactNode} from 'react';

interface AppTextareaProps {
  children: ReactNode;
  title: string;
  error?: GlobalError;
}

export default function AppTextarea(props: AppTextareaProps): JSX.Element {
  const {children, title, error} = props;

  return (
    <div className={`custom-textarea form-review__item ${error ? 'is-invalid' : ''}`}>
      <label>
        <span className="custom-textarea__label">
          {title}
          <svg width="9" height="9" aria-hidden="true">
            <use xlinkHref="#icon-snowflake"/>
          </svg>
        </span>
        {children}
      </label>
      <div className="custom-textarea__error">
        {error?.message}
      </div>
    </div>
  );
}
