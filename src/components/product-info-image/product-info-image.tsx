import {ProductType} from '../../types/product-type';

interface ProductImageProps {
  product: ProductType;
}

export default function ProductInfoImage(props: ProductImageProps): JSX.Element {
  const {product: p} = props;

  return (
    <div className="product__img" data-testid={'product-image'}>
      <picture>
        <source
          type="image/webp"
          srcSet={`/${p.previewImgWebp}, /${p.previewImgWebp2x} 2x`}
        />
        <img
          src={`/${p.previewImg}`}
          srcSet={`/${p.previewImg2x} 2x`}
          width="560"
          height="480"
          alt={p.name}
        />
      </picture>
    </div>
  );
}
