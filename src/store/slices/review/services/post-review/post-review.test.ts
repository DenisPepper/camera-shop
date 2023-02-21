import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../../../state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {ServerUrl as Server} from '../../../../../api/server-url';
import {postReview} from './post-review';
import {stubPostReview} from '../../../../../mocks/stub-post-review';
import {reviewPopupActions} from '../../../review-popup/slice/review-popup-slice';
import {gratefulFeedbackPopupActions} from '../../../grateful-feedback-popup/slice/grateful-feedback-popup-slice';

describe('when dispatch function', () => {
  const mockAPI = new MockAdapter(axios);
  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);

  it('should call actions with server 200 response', async () => {
    const store = mockStore();
    mockAPI
      .onPost(Server.PostReview)
      .reply(200, 'ok');

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postReview(
      {
        review: stubPostReview,
        whenResolved: () => {
          store.dispatch(reviewPopupActions.reset());
          store.dispatch(reviewPopupActions.close());
          store.dispatch(gratefulFeedbackPopupActions.open());
        },
      }
    ));

    const expectedActions = [
      postReview.pending.type,
      postReview.fulfilled.type,
      reviewPopupActions.reset.type,
      reviewPopupActions.close.type,
      gratefulFeedbackPopupActions.open.type,
    ];

    store.getActions().forEach(({type}) => {
      expect(type).toEqual(expectedActions.find((actionType) => type === actionType));
    });

  });
});
