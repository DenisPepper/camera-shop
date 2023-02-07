import {DEFAULT_CATALOG_LINK, Path} from '../../settings/settings';

export const formatPath = (path: string) => {
  let to: string;
  switch (path) {
    case 'root':
      to = '/';
      break;
    case Path.Catalog:
      to = DEFAULT_CATALOG_LINK;
      break;
    default:
      to = path;
  }
  return to;
};
