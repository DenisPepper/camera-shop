import ProductReview from './product-review';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {stubReview} from '../../mocks/stub-review';

describe('test ProductReview FC', () => {
  const stubID = 1;
  const stubTotalCount = 1;
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    review: {list: [stubReview], totalCount: stubTotalCount},
    reviewPopup: {isOpen: true, shouldReset: false},
    gratefulFeedbackPopup: {isOpen: false},
  };

  const store = mockStore(initialState);

  it('should render without crushing', () => {

    render(
      <Provider store={store}>
        render(<ProductReview id={stubID}/>);
      </Provider>
    );
  });
});
