import './api-error.css';
import {ErrorsConfig as Error} from '../../api/errors-config';
import {useState} from 'react';

const stubErrors: string[] = [Error.OnFetchProducts, Error.OnFetchProductByID, Error.OnFetchPromo];

export default function ApiError(): JSX.Element | null {
  const [errors, setErrors] = useState<string[]>(stubErrors);

  const handleClickError = (evt: React.MouseEvent<HTMLLIElement>) => {
    const value = evt.currentTarget.textContent;
    setErrors(
      (prevState) =>
        prevState.filter((err) => err !== value)
    );
  };

  return errors.length ?
    <div className={'api-error api-error-wrapper'}>
      <h1 className={'visually-hidden'}>Список ошибок при запросах к серверу</h1>
      <ul className={'api-error__list'}>
        <div className={'api-error__title'}>api response errors:</div>
        {errors.map((err) =>
          (
            <li
              className={'api-error__item'}
              key={err}
              onClick={handleClickError}
              title={'click to close'}
            >
              {err}
            </li>
          )
        )}
      </ul>
    </div>
    :
    null;
}

/*
export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(appError, shallowEqual);
  return error ? <div className='error-message'>{error}</div> : null;
}

 */
