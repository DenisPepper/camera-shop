import {Navigate} from 'react-router-dom';
import {RoutesConfig} from '../../settings/settings';

export default function MainPage(): JSX.Element {
  return <Navigate to={RoutesConfig.Catalog} state={1}/>;
}
