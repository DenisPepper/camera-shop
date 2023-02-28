import {ProductType} from '../../types/product-type';

interface ProductImageProps {
  product: ProductType;
}

export default function ProductInfoImage(props: ProductImageProps): JSX.Element {
  const {product} = props;

  return (
    <div className="product__img" data-testid={'product-image'}>
      <picture>
        <source
          type="image/webp"
          srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x} 2x`}
        />
        <img
          src={`/${product.previewImg}`}
          srcSet={`/${product.previewImg2x} 2x`}
          width="560"
          height="480"
          alt={product.name}
        />
      </picture>
    </div>
  );
}
