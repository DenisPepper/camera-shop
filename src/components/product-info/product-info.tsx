import ProductInfoImage from '../product-info-image/product-info-image';
import ProductInfoContent from '../product-info-content/product-info-content';
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
            <ProductInfoImage key={'ProductImage'} product={product}/>
            <ProductInfoContent key={'ProductContent'} product={product}/>
          </div>
        </section>
      }
    </div>);
}
