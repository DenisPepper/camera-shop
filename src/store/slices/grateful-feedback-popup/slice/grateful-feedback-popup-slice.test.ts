import {
  gratefulFeedbackPopupActions as actions,
  gratefulFeedbackPopupReducer as reducer
} from './grateful-feedback-popup-slice';
import {GratefulFeedbackPopupSchema as stateSchema} from '../schema/grateful-feedback-popup-schema';

describe('test of grateful-feedback-popup-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: stateSchema = {isOpen: false};
    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should toggle state from false to true', () => {
    const prevState: stateSchema = {
      isOpen: false,
    };
    const updatedState: stateSchema = {
      isOpen: true,
    };
    expect(reducer(prevState, actions.open)).toEqual(updatedState);
  });

  it('should toggle state from true to false', () => {
    const prevState: stateSchema = {
      isOpen: true,
    };
    const updatedState: stateSchema = {
      isOpen: false,
    };
    expect(reducer(prevState, actions.close)).toEqual(updatedState);
  });
});
