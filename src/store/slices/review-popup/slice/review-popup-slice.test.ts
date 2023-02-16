import {reviewPopupActions as actions, reviewPopupReducer as reducer} from './review-popup-slice';
import {ReviewPopupSchema} from '../schema/review-popup-schema';
import {DeepPartial} from '@reduxjs/toolkit';

describe('test of review-popup reducer', () => {

  it('should return the initial state', () => {
    const initialState: ReviewPopupSchema = {
      isOpen: false,
      shouldReset: false,
    };
    expect(reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should check open() action with success', () => {
    const prevState: ReviewPopupSchema = {
      isOpen: false,
      shouldReset: true,
    };
    const updatedState: ReviewPopupSchema = {
      isOpen: true,
      shouldReset: false,
    };
    expect(reducer(prevState, actions.open))
      .toEqual(updatedState);
  });

  it('should check close() action with success', () => {
    const prevState: DeepPartial<ReviewPopupSchema> = {
      isOpen: true,
    };
    const updatedState: DeepPartial<ReviewPopupSchema> = {
      isOpen: false,
    };
    expect(reducer(prevState as ReviewPopupSchema, actions.close))
      .toEqual(updatedState);
  });

  it('should check reset() action with success', () => {
    const prevState: DeepPartial<ReviewPopupSchema> = {
      shouldReset: false,
    };
    const updatedState: DeepPartial<ReviewPopupSchema> = {
      shouldReset: true,
    };
    expect(reducer(prevState as ReviewPopupSchema, actions.reset))
      .toEqual(updatedState);
  });
});
