import {Navigate} from 'react-router-dom';
import {DEFAULT_PAGE_NUMBER, Path as to} from '../../settings/settings';

export default function MainPage(): JSX.Element {
  return <Navigate to={`/${to.Catalog}/${DEFAULT_PAGE_NUMBER}`}/>;
}

