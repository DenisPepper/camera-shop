/* eslint-disable @typescript-eslint/no-unused-vars */

import ProductReviewPopup from './product-review-popup';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';

const mockStore = configureMockStore<StateSchema,
  Action,
  ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
const initialState: DeepPartial<StateSchema> = {
  reviewPopup: {isOpen: false, shouldReset: false}
};
const store = mockStore(initialState);
const onSubmitFormHandler = jest.fn();
const onCloseFormHandler = jest.fn();


it('should render without crushing', () => {
  render(
    <Provider store={store}>
      <ProductReviewPopup
        onSubmitFormHandler={onSubmitFormHandler}
        onPopupCloseHandler={onCloseFormHandler}
      />
    </Provider>
  );
});
