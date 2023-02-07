import ProductImage from '../product-image/product-image';
import ProductContent from '../product-content/product-content';
import {ProductType} from '../../types/product-type';

interface ProductProps {
  product: ProductType;
}

export default function Product(props: ProductProps): JSX.Element {
  const {product} = props;

  return (
    <div className={'page-content__section'}>
      <section className={'product'}>
        <div className={'container'}>
          <ProductImage key={'ProductImage'} product={product}/>
          <ProductContent key={'ProductContent'} product={product}/>
        </div>
      </section>
    </div>);
}
