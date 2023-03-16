import {shallowEqual, useSelector} from 'react-redux';
import {getProducts} from '../../store/slices/product/selectors/get-products/get-products';
import ProductCard from '../product-card/product-card';
import {ProductType} from '../../types/product-type';
import './product-list.css';

export default function ProductList(): JSX.Element {
  const products: ProductType[] = useSelector(getProducts, shallowEqual);

  return (
    <div className={'cards catalog__cards'}>
      {products.length ?
        products.map((product) => <ProductCard key={product.id} product={product}/>)
        :
        <div className={'catalog__cards--empty'}>по вашему запросу ничего не найдено</div>}
    </div>
  );
}
