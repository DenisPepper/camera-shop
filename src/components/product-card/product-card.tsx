import {ProductType} from '../../types/product-type';
import ProductCardInfo from '../product-card-info/product-card-info';
import ProductCardImage from '../product-card-image/product-card-image';
import ProductCardButton from '../product-card-button/product-card-button';

interface ProductCardProps {
  product: ProductType;
  modifier?: 'is-active';
}

export default function ProductCard(props: ProductCardProps): JSX.Element {
  const {product, modifier = ''} = props;

  return (
    <div className={`product-card ${modifier}`}>
      <ProductCardImage
        key={'ProductCardImage'}
        name={product.name}
        previewImg={product.previewImg}
        previewImg2x={product.previewImg2x}
        previewImgWebp={product.previewImgWebp}
        previewImgWebp2x={product.previewImgWebp2x}
      />

      <ProductCardInfo
        key={'ProductCardInfo'}
        name={product.name}
        price={product.price}
        rating={product.rating}
        reviewCount={product.reviewCount}
      />

      <ProductCardButton key={'ProductCardButton'} product={product}/>
    </div>
  );
}
