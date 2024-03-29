import {Route, Routes} from 'react-router-dom';
import {Path as to} from '../../settings/settings';
import AppLayout from '../app-layout/app-layout';
import MainPage from '../../pages/main-page/main-page';
import ProductPage from '../../pages/product-page/product-page';
import CartPage from '../../pages/cart-page/cart-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductListPage from '../../pages/product-list-page/product-list-page';
import CartErrorPage from '../../pages/cart-error-page/cart-error-page';

export function AppRouter(): JSX.Element {
  return (
    <Routes>

      <Route path={to.Main} element={<AppLayout/>}>

        <Route index element={<MainPage/>}/>

        <Route path={to.Catalog} element={<CatalogPage/>}>
          <Route path={':page'} element={<ProductListPage/>}/>;
        </Route>

        <Route path={to.Product}>
          <Route path={':id'} element={<ProductPage/>}/>
        </Route>

        <Route path={to.Cart} element={<CartPage/>}/>

      </Route>

      <Route path={to.CartError} element={<CartErrorPage/>}/>

      <Route path={to.NotFound} element={<NotFoundPage/>}/>

    </Routes>
  );
}
