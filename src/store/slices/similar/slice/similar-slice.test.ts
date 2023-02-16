import {similarReducer,} from './similar-slice';
import {SimilarSchema} from '../schema/similar-schema';

describe('test of similar-slice reducer', () => {

  it('should return the initial state', () => {
    const initialState: SimilarSchema = {products: null};
    expect(similarReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });
});

