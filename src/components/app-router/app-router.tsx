import {Route, Routes} from 'react-router-dom';
import {RoutesConfig} from '../../settings/settings';
import AppLayout from '../app-layout/app-layout';
import MainPage from '../../pages/main-page/main-page';
import ProductPage from '../../pages/product-page/product-page';
import CartPage from '../../pages/cart-page/cart-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductList from '../product-list/product-list';

export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path={RoutesConfig.Main} element={<AppLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'/catalog/'} element={<CatalogPage/>}>
          <Route path={':page'} element={<ProductList/>}/>;
        </Route>
        <Route path={RoutesConfig.Product} element={<ProductPage/>}/>
        <Route path={RoutesConfig.Cart} element={<CartPage/>}/>
      </Route>
      <Route path={RoutesConfig.NotFound} element={<NotFoundPage/>}/>
    </Routes>
  );
}
