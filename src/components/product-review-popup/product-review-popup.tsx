/* eslint-disable @typescript-eslint/no-misused-promises */
import AppPopup from '../app-popup/app-popup';
import {shallowEqual, useSelector} from 'react-redux';
import {
  getReviewPopupIsOpen
} from '../../store/slices/review-popup/selectors/get-review-popup-is-open/get-review-popup-is-open';
import {SubmitHandler, useForm} from 'react-hook-form';
import AppTextInput from '../app-text-input/app-text-input';
import AppTextarea from '../app-textarea/app-textarea';
import {DECIMAL, DEFAULT_REVIEW_POPUP_VALUES, TEXTAREA_MIN_LENGTH} from '../../settings/settings';
import AppRatingInput from '../app-rating-input/app-rating-input';
import React, {useLayoutEffect, useRef} from 'react';
import {ReviewFormType} from '../../types/review-form-type';
import {
  getReviewPopupShouldReset
} from '../../store/slices/review-popup/selectors/get-review-popup-should-reset/get-review-popup-should-reset';
import {ReviewPrePostType} from '../../types/review-post-type';

interface ProductReviewPopupProps {
  onSubmitFormHandler: (data: ReviewPrePostType) => void;
  onPopupCloseHandler: () => void;
}

export default function ProductReviewPopup(props: ProductReviewPopupProps): JSX.Element {
  const {onSubmitFormHandler, onPopupCloseHandler} = props;
  const isMounted = useSelector(getReviewPopupIsOpen, shallowEqual);
  const shouldReset = useSelector(getReviewPopupShouldReset, shallowEqual);
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const {register, handleSubmit, reset, formState: {errors}} = useForm<ReviewFormType>({
    defaultValues: DEFAULT_REVIEW_POPUP_VALUES
  });
  const {ref, ...rest} = register('rate', {required: 'Нужно оценить товар'});

  const handleOnPopupSubmit: SubmitHandler<ReviewFormType> = (data, evt) => {
    evt?.preventDefault();
    onSubmitFormHandler({
      userName: data.userName,
      advantage: data.userPlus,
      disadvantage: data.userMinus,
      review: data.userComment,
      rating: parseInt(data.rate, DECIMAL)
    }
    );
  };

  useLayoutEffect(() => {
    if (shouldReset) {
      reset();
    }
  }, [shouldReset, reset]);

  return (
    <AppPopup
      isOpen={isMounted}
      title={'Оставить отзыв'}
      defaultFocusedElement={ratingRef}
      onPopupCloseHandler={onPopupCloseHandler}
    >
      <div className={'form-review'}>
        <form
          method="post"
          autoComplete={'off'}
          onSubmit={handleSubmit(handleOnPopupSubmit)}
        >
          <div className={'form-review__rate'}>

            <AppRatingInput title={'Рейтинг'} error={errors?.rate}>
              <div className="rate__group">

                <input
                  {...register('rate', {required: 'Нужно оценить товар'})}
                  className="visually-hidden" id="star-5" type="radio" value="5"
                />
                <label className="rate__label" htmlFor="star-5" title="Отлично"></label>

                <input
                  {...register('rate', {required: 'Нужно оценить товар'})}
                  className="visually-hidden" id="star-4" type="radio" value="4"
                />
                <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>

                <input
                  {...register('rate', {required: 'Нужно оценить товар'})}
                  className="visually-hidden" id="star-3" type="radio" value="3"
                />
                <label className="rate__label" htmlFor="star-3" title="Нормально"></label>

                <input
                  {...register('rate', {required: 'Нужно оценить товар'})}
                  className="visually-hidden" id="star-2" type="radio" value="2"
                />
                <label className="rate__label" htmlFor="star-2" title="Плохо"></label>

                <input
                  ref={(evt) => {
                    ref(evt);
                    ratingRef.current = evt;
                  }}
                  {...rest}
                  className="visually-hidden" id="star-1" type="radio" value="1"
                />
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

    </AppPopup>
  );
}
