import {Navigate} from 'react-router-dom';
import {DEFAULT_PAGE_NUMBER} from '../../settings/settings';

export default function MainPage(): JSX.Element {
  return <Navigate to={`/catalog/${DEFAULT_PAGE_NUMBER}`}/>;
}

