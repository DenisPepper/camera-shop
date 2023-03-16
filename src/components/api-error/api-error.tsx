import './api-error.css';
import {getErrors} from '../../store/slices/error/selectors/get-errors/get-errors';
import {shallowEqual, useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {errorSliceActions as actions} from '../../store/slices/error/slice/error-slice';

export default function ApiError(): JSX.Element | null {
  const errors = useSelector(getErrors, shallowEqual);
  const dispatch = useAppDispatch();

  const handleClickError = () => {
    dispatch(actions.removeErrors());
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
