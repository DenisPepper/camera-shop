/* eslint-disable @typescript-eslint/no-misused-promises */
import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts/use-app-dispatch';
import {reviewPopupActions} from '../../store/slices/review-popup/slice/review-popup-slice';
import {
  getReviewPopupIsOpen
} from '../../store/slices/review-popup/selectors/get-review-popup-is-open/get-review-popup-is-open';
import {SubmitHandler, useForm} from 'react-hook-form';
import AppTextInput from '../app-text-input/app-text-input';
import AppPopupCloseButton from '../app-popup-close-button/app-popup-close-button';
import AppTextarea from '../app-textarea/app-textarea';
import {TEXTAREA_MIN_LENGTH} from '../../settings/settings';
import AppRatingInput from '../app-rating-input/app-rating-input';

interface FormType {
  userName: string;
  userPlus: string;
  userMinus: string;
  userComment: string;
  rate: string;
}

export default function ProductReviewPopup(): JSX.Element {
  const dispatch = useAppDispatch();
  const isMounted = useSelector(getReviewPopupIsOpen, shallowEqual);
  const {register, handleSubmit, reset, formState: {errors}} = useForm<FormType>();

  const handleOnCloseClick = () => {
    reset();
    dispatch(reviewPopupActions.close());
  };

  /* eslint-disable no-console */
  const handleOnSubmitForm: SubmitHandler<FormType> = (data, evt) => {
    evt?.preventDefault();
    console.log('data', data);
  };

  const handleErrors = () => {
    console.log('errors', errors);
  };

  return (
    <AppPopup
      isOpen={isMounted}
      overlayOnClickHandler={handleOnCloseClick}
      onEscapeKeyDownHandler={handleOnCloseClick}
    >
      <p className="title title--h4">Оставить отзыв</p>

      <div className={'form-review'}>
        <form
          method="post"
          autoComplete={'off'}
          onSubmit={handleSubmit(handleOnSubmitForm, handleErrors)}
        >
          <div className={'form-review__rate'}>

            <AppRatingInput title={'Рейтинг'} error={errors?.rate}>
              <div className="rate__group">
                <input {...register('rate', {required: 'Нужно оценить товар'})} className="visually-hidden" id="star-5" type="radio" value="5"/>
                <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                <input {...register('rate', {required: 'Нужно оценить товар'})} className="visually-hidden" id="star-4" type="radio" value="4"/>
                <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                <input {...register('rate', {required: 'Нужно оценить товар'})} className="visually-hidden" id="star-3" type="radio" value="3"/>
                <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                <input {...register('rate', {required: 'Нужно оценить товар'})} className="visually-hidden" id="star-2" type="radio" value="2"/>
                <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                <input {...register('rate', {required: 'Нужно оценить товар'})} className="visually-hidden" id="star-1" type="radio" value="1"/>
                <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
              </div>
            </AppRatingInput>

            <AppTextInput
              title={'Ваше имя'}
              error={errors?.userName}
            >
              <input
                type="text"
                placeholder="Введите ваше имя"
                {...register('userName', {required: 'Нужно указать имя'})}
              />
            </AppTextInput>

            <AppTextInput
              title={'Достоинства'}
              error={errors?.userPlus}
            >
              <input
                type="text"
                placeholder={'Основные преимущества товара'}
                {...register('userPlus', {required: 'Нужно указать достоинства'})}
              />
            </AppTextInput>

            <AppTextInput
              title={'Недостатки'}
              error={errors?.userMinus}
            >
              <input
                type={'text'}
                placeholder={'Главные недостатки товара'}
                {...register('userMinus', {required: 'Нужно указать недостатки'})}
              />
            </AppTextInput>

            <AppTextarea title={'Комментарий'} error={errors?.userComment}>
              <textarea
                minLength={TEXTAREA_MIN_LENGTH}
                placeholder={'Поделитесь своим опытом покупки'}
                {...register('userComment', {required: 'Нужно добавить комментарий'})}
              />
            </AppTextarea>

          </div>

          <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>

        </form>
      </div>

      <AppPopupCloseButton handleOnClick={handleOnCloseClick}/>

    </AppPopup>
  );
}
