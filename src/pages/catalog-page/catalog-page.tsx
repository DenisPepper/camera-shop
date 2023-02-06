import {Outlet} from 'react-router-dom';

export default function CatalogPage(): JSX.Element {

  return (
    <section className={'catalog'}>
      <div className={'container'}>
        <Outlet/>
      </div>
    </section>
  );
}
