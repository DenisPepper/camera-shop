import {Outlet} from 'react-router-dom';
import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function AppLayout(): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <div className={'wrapper'}>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}

