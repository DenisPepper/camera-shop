import {useSelector} from 'react-redux';
import {getProducts} from '../../store/slices/product/selectors/get-products/get-products';
import ProductCard from '../product-card/product-card';

export default function ProductList(): JSX.Element {
  const products = useSelector(getProducts);

  return (
    <div className={'cards catalog__cards'}>
      {
        products.map((product) => <ProductCard key={product.id} product={product}/>)
      }
    </div>
  );
}
