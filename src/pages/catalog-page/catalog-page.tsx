import {Outlet} from 'react-router-dom';
import Banner from '../../components/banner/banner';

export default function CatalogPage(): JSX.Element {

  return (
    <main>
      <Banner/>
      <Outlet context={1}/>
    </main>
  );
}
