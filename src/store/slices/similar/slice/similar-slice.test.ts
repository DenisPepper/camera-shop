import {similarReducer,} from './similar-slice';
import {SimilarSchema} from '../schema/similar-schema';
import {fetchSimilar} from '../../../../services/fetch-similar/fetch-similar';
import {stubProduct} from '../../../../mocks/stub-product';

describe('test of similar-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: SimilarSchema = {products: null};
    expect(similarReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });


  it('should return null on fetchSimilar pending', () => {
    const prevState: SimilarSchema = {products: []};
    const expectedState: SimilarSchema = {products: null};
    expect(similarReducer(prevState, {type: fetchSimilar.pending.type}))
      .toEqual(expectedState);
  });

  it('should return array on fetchSimilar fulfilled', () => {
    const prevState: SimilarSchema = {products: null};
    const expectedState: SimilarSchema = {products: [stubProduct]};
    expect(similarReducer(
      prevState, {
        type: fetchSimilar.fulfilled.type,
        payload: [stubProduct]
      }))
      .toEqual(expectedState);
  });

});

