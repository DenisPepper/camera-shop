import ProductImage from '../product-image/product-image';
import ProductContent from '../product-content/product-content';
import {getProduct} from '../../store/slices/product/selectors/get-product/get-product';
import {useSelector} from 'react-redux';

export default function ProductInfo(): JSX.Element {
  const product = useSelector(getProduct);

  return (
    <div className={'page-content__section'}>
      {
        !!product &&
        <section className={'product'}>
          <div className={'container'}>
            <ProductImage key={'ProductImage'} product={product}/>
            <ProductContent key={'ProductContent'} product={product}/>
          </div>
        </section>
      }
    </div>);
}
