import {createSelector} from '@reduxjs/toolkit';
import {getSimilarSlice} from '../get-similar-slice/get-similar-slice';
import {SimilarSchema} from '../../schema/similar-schema';

export const getSimilarProducts = createSelector(
  getSimilarSlice,
  (similar: SimilarSchema) => similar.products);
