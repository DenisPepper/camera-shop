import GratefulFeedbackPopup from './grateful-feedback-popup';
import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateSchema} from '../../store/state-schema';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {DeepPartial} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

describe('test GratefulFeedbackPopup FC', () => {
  const stubCloseHandler = jest.fn();

  const mockStore = configureMockStore<StateSchema,
    Action,
    ThunkDispatch<StateSchema, typeof axios, Action>>([thunk]);
  const initialState: DeepPartial<StateSchema> = {
    gratefulFeedbackPopup: {isOpen: false}
  };
  const store = mockStore(initialState);

  it('should render without fail', () => {

    render(
      <Provider store={store}>
        <GratefulFeedbackPopup handlePopupClose={stubCloseHandler}/>
      </Provider>
    );
  });
});
