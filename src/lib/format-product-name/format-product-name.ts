import {PRODUCT_NAME_EXCLUSION_PATTERNS as PATTERNS} from '../../settings/settings';
import {findMatches} from '../find-matches/find-matches';

export const formatProductName = (originalName: string) => originalName
  .split(' ')
  .filter(((subString) => findMatches(subString, PATTERNS)))
  .join(' ')
  .trim();
